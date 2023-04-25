<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::create([
            'name' => "Tân",
            'email' => "tannguyen.010201@gmail.com",
            'password' => 'truongboanhai', //123456
            'phone_number' => "0999999999",
            'is_Admin' => true,
            'user_roles' => 'user',
            'about' => "(*_*)",
        ]);

        \App\Models\User::create([
            'name' => "Trường",
            'email' => "letruong02072001@gmail.com",
            'password' => 'truongboanhai', //123456
            'phone_number' => "021736321",
            'is_Admin' => false,
            'user_roles' => 'user',
            'about' => "Death is like the wind, always by my side",
        ]);

        \App\Models\UserProfile::create([
            'user_id' => 1,
            'gender' => 'male',
            'avatar' => "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/323952197_567233611560466_7304591525322997827_n.jpg?_nc_cat=106&ccb=1-
            7&_nc_sid=09cbfe&_nc_ohc=uMNInV918rgAX-D1MHH&_nc_ht=scontent.fdad3-5.fna&oh=00_AfDE2DudSyD_Uredi03XLsCYCxDtCxPsYmxgiPaQXNs3_g&oe=643A5F44",
        ]);

        \App\Models\User::create([
            'name' => "Tân",
            'email' => "tan123@gmail.com",
            'password' => 'truongboanhai', //123456
            'phone_number' => "021736321",
            'is_Admin' => false,
            'user_roles' => 'user',
            'about' => "Solo yasuo?",
        ]);

        \App\Models\UserProfile::create([
            'user_id' => 2,
            'gender' => 'female',
            'avatar' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOnUBiI51lBoTRhYTJHEh8eM4BUb66vN5BeQ&usqp=CAU",
        ]);

        \App\Models\User::create([
            'name' => "Vũ",
            'email' => "vu123@gmail.com",
            'password' => 'truongboanhai', //123456
            'phone_number' => "021736321",
            'is_Admin' => false,
            'user_roles' => 'ts',
            'about' => "Your will, my hand",
        ]);

        \App\Models\TSProfile::create([
            'user_id' => 3,
            'avatar' => "https://haycafe.vn/wp-content/uploads/2021/12/hinh-anh-anime-nam-1.jpg",
        ]);

        \App\Models\User::create([
            'name' => "Hằng",
            'email' => "hang123@gmail.com",
            'password' => 'truongboanhai', //123456
            'phone_number' => "021736321",
            'is_Admin' => false,
            'user_roles' => 'ts',
            'about' => "Solo ys?",
        ]);

        \App\Models\TSProfile::create([
            'user_id' => 4,
            'avatar' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrmlMm8jN0GqRjo2L9b6OBtm8gJbJS9cIZfw&usqp=CAU",
        ]);

        \App\Models\Tours::create([
            'ts_id' => 1,
            'name' => "Đà Nẵng Tour",
            'address' => "Huế",
            'description'=> "Tour giá hạt dẻ",
            'from_date' => "2023-05-10",
            'to_date' => "2023-05-14",
            'price' => 1000000,
            'slot' => 10,
            'lat' => "8,1289332",
            'lon' => "102,912387",
        ]);

        \App\Models\Tours::create([
            'ts_id' => 2,
            'name' => "Huế Tour",
            'address' => "Hồ Chí Minh",
            'description'=> "Tour giá rẻ",
            'from_date' => "2023-05-10",
            'to_date' => "2023-05-14",
            'price' => 10000000,
            'slot' => 10,
            'lat' => "8,7217331",
            'lon' => "102,2342342",
        ]);

        \App\Models\Tours::create([
            'ts_id' => 1,
            'name' => "Hồ Chí Minh Tour",
            'address' => "Hồ Chí Minh",
            'description'=> "Tour giá đắt",
            'from_date' => "2023-05-10",
            'to_date' => "2023-05-14",
            'price' => 1000000000,
            'slot' => 10,
            'lat' => "8,71821323",
            'lon' => "102,324232",
        ]);


        \App\Models\Rooms::create([
            'room_owner' => 1,
            'name' => "Phòng đi chơi",
            'description' => "Không chơi không về",
        ]);

        \App\Models\Rooms::create([
            'room_owner' => 2,
            'name' => "Phòng đi bay",
            'description' => "Không bay không ngủ",
        ]);

        \App\Models\PersonalTours::create([
            'name' => "Chuyến đi đến Đà Nẵng",
            'owner_id' => 1,
            'room_id' => 1,
            'description' => "Tham quan Đà Nẵng",
            'from_date' => "2023-05-10",
            'to_date' => "2023-05-14",
            'lat' => "1,91823912",
            'lon' => "103,212133",
            'from_where' => "Huế",
            'to_where' => "Đà Nẵng",
        ]);

        \App\Models\PersonalTours::create([
            'name' => "Chuyến đi đến Huế",
            'owner_id' => 1,
            'room_id' => 1,
            'description' => "Tham quan Huế",
            'from_date' => "2023-05-10",
            'to_date' => "2023-05-14",
            'lat' => "1,6213213",
            'lon' => "103,16123561",
            'from_where' => "Hồ Chí Minh",
            'to_where' => "Huế",
        ]);

        \App\Models\PersonalTours::create([
            'name' => "Chuyến đi đến Hà Nội",
            'owner_id' => 2,
            'room_id' => 2,
            'description' => "Tham quan Hà Nội",
            'from_date' => "2023-05-10",
            'to_date' => "2023-05-14",
            'lat' => "1,512313",
            'lon' => "103,123123",
            'from_where' => "Vinh",
            'to_where' => "Hà Nội",
        ]);

        \App\Models\Images::create([
            'image_name' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPKXglM8hw473nI64ggSKgk5sjIlThRlAyag&usqp=CAU",
            'tour_id' => 1,
        ]);

        \App\Models\Images::create([
            'image_name' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkuKpsGUvhvFIxZo6dKt-Dw3vpM-OMQCWCEg&usqp=CAU",
            'tour_id' => 1,
        ]);

        \App\Models\Images::create([
            'image_name' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQBqDQaZ7FyWbRp1DjhLX6mS5fuh-BE1E8w&usqp=CAU",
            'tour_id' => 1,
        ]);

        \App\Models\Images::create([
            'image_name' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQBqDQaZ7FyWbRp1DjhLX6mS5fuh-BE1E8w&usqp=CAU",
            'tour_id' => 1,
        ]);

        \App\Models\Images::create([
            'image_name' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQBqDQaZ7FyWbRp1DjhLX6mS5fuh-BE1E8w&usqp=CAU",
            'tour_id' => 1,
        ]);

        \App\Models\Images::create([
            'image_name' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSt1wLLHHU4HtAz4JZmBDdF8RWbih0eFfQ7A&usqp=CAU",
            'tour_id' => 2,
        ]);

        \App\Models\Images::create([
            'image_name' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6CI2DUQeZnMIXjpsbjshPh6i9TtfnA1CCTQ&usqp=CAU",
            'tour_id' => 2,
        ]);

        \App\Models\Images::create([
            'image_name' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR43C7pCHhsCNMH9l7lViH1OEcaWiAScqX2xO7gEtKVM31t_pS3yngWderyOokTTbk5Hm8&usqp=CAU",
            'tour_id' => 2,
        ]);

        \App\Models\Images::create([
            'image_name' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8U5QtZkqP6RYstwTRwsMkBg1kmXHCWzPvfbjwrRbWcCteyhj9_osuVfjFztXsJzEEXE&usqp=CAU",
            'tour_id' => 2,
        ]);

        \App\Models\Images::create([
            'image_name' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMslPzJGOhZ9aKN_h3NMhX_NFJwVZ9yM5R2w&usqp=CAU",
            'tour_id' => 2,
        ]);

        \App\Models\Images::create([
            'image_name' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4pmKfAFN4FIRnwijPVeFQwIqiDAhHWtF2Ng&usqp=CAU",
            'tour_id' => 3,
        ]);

        \App\Models\Images::create([
            'image_name' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStL7ay5eagcZf9C_6-Ks8sjBzVhPxc6aVBcw&usqp=CAU",
            'tour_id' => 3,
        ]);

        \App\Models\Images::create([
            'image_name' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY24E2PIBiu9Q4XnK-gSqeXpKGfWrVoGv5tg&usqp=CAU",
            'tour_id' => 3,
        ]);

        \App\Models\Images::create([
            'image_name' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxWE3xIAqHHhTLPYXdp4IrB-3w0b2VXLoJVQ&usqp=CAU",
            'tour_id' => 3,
        ]);

        \App\Models\Images::create([
            'image_name' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ztAPzTva9jhfaCZY-l6LeJVo62JQPln6Ig&usqp=CAU",
            'tour_id' => 3,
        ]);
    }
}
