<?php

namespace App\Http\Controllers;
use App\Models\Ordereds;
use App\Models\Transactions;
// session_start();

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class CheckoutController extends Controller
{
    public function checkout(){
        $time = time();
        $vnp_Url = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
        $vnp_Returnurl = "http://127.0.0.1:8000/api/payment/done";
        $vnp_TmnCode = "OMDEPK94";//Mã website tại VNPAY 
        $vnp_HashSecret = "EYXDOSVGKBEAZCAIXQEAKDMVGVOJWMST"; //Chuỗi bí mật

        $vnp_TxnRef = $time; //Mã đơn hàng. Trong thực tế Merchant cần insert đơn hàng vào DB và gửi mã này sang VNPAY
        $vnp_OrderInfo = $_POST['order_desc'];
        $vnp_OrderType = "Thanh toán hóa đơn";
        $vnp_Amount = $_POST['amount'] * $_POST['price'] * 100;
        $vnp_Locale = 'vn';
        $vnp_BankCode = '';

        setcookie('user_id', $_POST['user_id']);
        setcookie('tour_id', $_POST['tour_id']);
        setcookie('price', $_POST['price']);
        setcookie('amount', $_POST['amount']);
        $inputData = array(
            "vnp_Version" => "2.1.0",
            "vnp_TmnCode" => $vnp_TmnCode,
            "vnp_Amount" => $vnp_Amount,
            "vnp_Command" => "pay",
            "vnp_CreateDate" => date('YmdHis'),
            "vnp_CurrCode" => "VND",
            // "vnp_IpAddr" => $vnp_IpAddr,
            "vnp_Locale" => $vnp_Locale,
            "vnp_OrderInfo" => $vnp_OrderInfo,
            "vnp_OrderType" => $vnp_OrderType,
            "vnp_ReturnUrl" => $vnp_Returnurl,
            "vnp_TxnRef" => $vnp_TxnRef,
        );

        if (isset($vnp_BankCode) && $vnp_BankCode != "") {
            $inputData['vnp_BankCode'] = $vnp_BankCode;
        }
        if (isset($vnp_Bill_State) && $vnp_Bill_State != "") {
            $inputData['vnp_Bill_State'] = $vnp_Bill_State;
        }

        // var_dump($inputData);
        ksort($inputData);
        $query = "";
        $i = 0;
        $hashdata = "";
        foreach ($inputData as $key => $value) {
            if ($i == 1) {
                $hashdata .= '&' . urlencode($key) . "=" . urlencode($value);
            } else {
                $hashdata .= urlencode($key) . "=" . urlencode($value);
                $i = 1;
            }
            $query .= urlencode($key) . "=" . urlencode($value) . '&';
        }

        $vnp_Url = $vnp_Url . "?" . $query;
        if (isset($vnp_HashSecret)) {
            $vnpSecureHash =   hash_hmac('sha512', $hashdata, $vnp_HashSecret);//  
            $vnp_Url .= 'vnp_SecureHash=' . $vnpSecureHash;
        }
        $returnData = array('code' => '00'
            , 'message' => 'success'
            , 'data' => $vnp_Url);
        if (isset($_POST['redirect'])) {
            header('Location: ' . $vnp_Url);
            die();
        } 
    }

    public function done(Request $request)
    {
        $orderId = Ordereds::insertGetId([
            'user_id' => $_COOKIE['user_id'],
            'tour_id' =>$_COOKIE['tour_id'],
            'price' => $_COOKIE['price'], 
            'tickets' => $_COOKIE['amount'],
            'created_at' => now(),
        ]);

        // dd($request->vnp_Amount);
        Transactions::create([
            'ordered_id' => $orderId,
            'amount' => $request->vnp_Amount,
            'bankCode' => $request->vnp_BankCode,
            'cardType' => $request->vnp_CardType,
            'responseCode' => $request->vnp_ResponseCode,
        ]);
        return view('payment');
    }

    public function payment()
    {
        // return Carbon::now()->second;
        // return time();
        return view('payment');
    }
}
