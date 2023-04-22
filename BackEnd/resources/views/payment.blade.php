<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
    <form action="" method="post">
        @csrf
        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Description</label>
            <input type="text" name="order_desc" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
        </div>
        <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Price</label>
            <input type="text" name="price" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
        </div>
        <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Amount</label>
            <input type="text" name="amount" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
        </div>
        <button name="redirect" type="submit">Submit</button>
    </form>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>