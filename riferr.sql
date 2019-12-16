-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2019 at 08:28 AM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `riferr`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `ID_category` int(11) NOT NULL,
  `category` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`ID_category`, `category`) VALUES
(1, 'desain_web'),
(2, 'desain_baju'),
(3, 'printing'),
(4, 'desain_logo');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `service_id` int(11) NOT NULL,
  `ID_category` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `service_title` varchar(50) NOT NULL,
  `service_desc` varchar(255) NOT NULL,
  `service_price` bigint(20) NOT NULL,
  `image_path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`service_id`, `ID_category`, `user_id`, `service_title`, `service_desc`, `service_price`, `image_path`) VALUES
(13, 2, 8, 'Sketsa Desain', 'Merancang desain baju dan kaos ', 200000, 'photo1576095814977.jpg'),
(14, 2, 8, 'Desain PDH', 'Warna bisa disesuaikan, inshaallah hasil sesuai yang diharapkan.', 150000, 'photo1576096096924.jpg'),
(15, 2, 8, 'Desain Kaos', 'Mendesain gambar atau logo khususnya untuk disablon.', 250000, 'photo1576096269235.jpg'),
(16, 1, 9, 'Photography Website', 'Website bersifat statis dan bisa bersifat pribadi.\r\nTampilan web bisa disesuaikan.', 400000, 'photo1576096981896.jpg'),
(18, 4, 9, 'Logo Kemasan', 'Desain logo untuk aneka makanan yang akan diproduksi. Keren dan Menarik.', 100000, 'photo1576097650080.jpg'),
(19, 3, 10, 'Undangan Pernikahan', 'Undangan dengan gaya unik dan keren. Warna bisa disesuaikan dengan selera.', 500000, 'photo1576098056432.jpg'),
(20, 1, 10, 'Desain Pamflet', 'Pamflet khusus acara apa saja. Desainnya pasti memuaskan.', 350000, 'photo1576098155018.jpg'),
(21, 3, 10, 'Desain Majalah', 'Dapat mendesain semua majalah dalam banyak konsep.', 300000, 'photo1576098310814.jpg'),
(22, 3, 11, 'Undangan Pernikahan', 'Undangan dengan bermacam tema, bisa request. Dan Prosesnya tidak terlalu lama.', 240000, 'photo1576098802865.jpg'),
(23, 4, 11, 'Desain Logo', 'Mendesain logo yang menarik dan keren. Bisa untuk logo apa saja.', 320000, 'photo1576098953497.jpg'),
(24, 3, 11, 'Undangan party', 'Undangan untuk pesta ulang tahun atau untuk syukuran, dll.', 150000, 'photo1576099124221.jpg'),
(25, 1, 12, 'Travel Website', 'Website dinamis dimana, user friendly. Pokoknya cakeeppp.', 600000, 'photo1576099606210.jpg'),
(26, 1, 12, 'Blogger', 'Website tempat berbagi informasi dan bisa bersifat peribadi. one page.', 360000, 'photo1576099709553.jpg'),
(27, 4, 12, 'Logo Maker', 'Logo sesuai permintaan, Hasil dipastikan memuaskan.', 250000, 'photo1576099822315.jpg'),
(28, 1, 13, 'Website Profile', 'Website bisa berisi suatu informasi tentang desa, perusahaan, atau data diri.', 400000, 'photo1576100505556.jpg'),
(29, 1, 13, 'E-commerce', 'Website dengan tema produk yang akan dijual, dan lebih spesifik.', 700000, 'photo1576100662788.jpg'),
(30, 3, 13, 'Bookyet', 'desain halaman seperti majalah', 650000, 'photo1576100785283.jpg'),
(31, 3, 13, 'Poster', 'desain segala bentuk poster', 270000, 'photo1576101714655.jpg'),
(32, 4, 11, 'Logo Laundry', 'Logo dengan tema laundry, khusus buat jasa laundry. Didesain dengan sangat menarik.', 320000, 'photo1576101952181.jpg'),
(33, 4, 11, 'Logo Minuman', 'Logo dengan tema minuman, khusus untuk bisnis bidang minuman.', 250000, 'photo1576102052625.jpg'),
(34, 1, 9, 'One Page', 'Website denhan tampilan sederhana namun menarik. ', 380000, 'photo1576102269555.jpg'),
(36, 3, 9, 'Wallpaper', 'Wallpaper', 1000, 'photo1576127370959.jpg'),
(37, 1, 15, 'Simple Web App', 'descripsi agak pendek', 100000, 'photo1576132779173.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `transaction_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `transaction_req` text NOT NULL,
  `transaction_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_email` varchar(40) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_phone` varchar(30) NOT NULL,
  `user_address` varchar(50) NOT NULL,
  `user_avatar` varchar(50) NOT NULL,
  `user_role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_email`, `user_password`, `user_name`, `user_phone`, `user_address`, `user_avatar`, `user_role`) VALUES
(1, 'admin@admin.com', 'admin', 'admin fiverr', '098000', 'jalan-in aja', 'default_avatar.jpg', 0),
(2, 'seller1@seller1.com', 'seller1', 'seller1 coy', '0980009', 'jalan-in aja1', 'default_avatar.jpg', 1),
(3, 'seller2@seller2.com', 'seller2', 'seller 2 coy', '098098', 'jalan-in aja 2', 'default_avatar.jpg', 1),
(4, 'buyer1@buyer.com', 'buyer1', 'buyer 1 boy', '098098', 'jalan-in aza 1', 'default_avatar.jpg', 2),
(5, 'buyer2@buyer.com', 'buyer2', 'buyer 2 boy', '0980900', 'jalan-in aza 2', 'default_avatar.jpg', 2),
(6, 'amir.rhythm@gmail.com', '$2a$10$iiZ0drxksQq0n1W0t7dHse1UFRGcq5kPJcpv76dyjxMQrXpaodvsK', 'name', '087855777360', 'Kamaku 1/38-A', 'default_avatar.jpg', 2),
(7, 'ameliarahayu964@gmail.com', '$2a$10$xXQ7mEDEpTqRtY39E9KOoOw6iBbb54FIOEjkpWNdq7VPhrNLMYqw.', 'Rahayu Amaliyah', '082132368096', 'jl. medokan asri bar. IX N-25', 'default_avatar.jpg', 2),
(8, 'claraputri123@gmail.com', '$2a$10$7.AfiWW2gs/g3Q/6vG6sQu6kVZZ2jwq.mCkvgWPL1i4/aceRGfEJy', 'Clara Putri', '082336757999', 'Jl. Gn. Anyar Emas No.16', 'default_avatar.jpg', 1),
(9, 'dimasputra@gmail.com', '$2a$10$7fU6CifeMYuuNK1XAAhz2.zaYApVBvFx/UyebrjRAZnMFLpcSvus.', 'Dimas Satria Putra', '082778456399', 'Jl. Baluran Kidul No. 22', 'avatarFile1576127857291.jpg', 1),
(10, 'dion.cool@gmail.com', '$2a$10$nuOJaU0AHrZgigepuulNh.baD7FS7mRD3eKpZMlKsTMbeA2TjzakC', 'Moh. Dion Syahputra', '082667455244', 'Jl. Plampitan VIII No. 7', 'default_avatar.jpg', 1),
(11, 'tasha.mey22@gmail.com', '$2a$10$0a2/PEaMH.eRMhrjU2enxO43WxSq1eTv3i7YNWsMqhOy9PkieqsIC', 'Meylin Anatasha', '087157447257', 'Jl. Banyu Urip Lor 3C / 11 Surabaya', 'default_avatar.jpg', 1),
(12, 'adit_smile@gmail.com', '$2a$10$g9wkv86mcnTnR/4h0NEwbeVpnHkRvTQbWSkx4yhwkS4FhPGuzNvmC', 'Raymond Praditya', '082335799245', 'Jl. Gunung Anyar Jaya No. 55', 'default_avatar.jpg', 1),
(13, 'rafaelbon@gmail.com', '$2a$10$dTb0qQWX1A9epyMvWDtAku8opzl19CjizqV5TIL9RueP/c8YDEM5m', 'Rafael Bonet', '085325665175', 'Jalan Karang Menur I No. 2, Surabaya.', 'avatarFile1576101572783.jpg', 1),
(14, 'amir.mramirid@gmail.com', '$2a$10$AQwRrg6op0jf558w4Z5kquaPhWnJICNbjjuxmPDUCCpI/FYgz5uWK', 'Amir Hakim', '087855777360', 'Kamaku 1/38-A', 'avatarFile1576124798074.jpg', 1),
(15, 'kol@kol.com', '$2a$10$fNAhueMn7asPqgvDn9qdiOIbGwEnbcEq9yetqbLSea/trRyJwMHxi', 'kolel', '087855777360', 'Kamaku 1/38-A', 'avatarFile1576132934935.jpg', 1),
(16, 'amir@amir.com', '$2a$10$XbWwbpkx.EZHa.ntUS10ZOYZmss.Adb/Ti4Lm4jaUuFGZF4mLbi0e', 'Amir Hakim', '087855777360', 'Kamaku 1/38-A', 'default_avatar.jpg', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`ID_category`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`service_id`),
  ADD KEY `ID_category` (`ID_category`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`transaction_id`),
  ADD KEY `service_id` (`service_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `ID_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `transaction_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_ibfk_1` FOREIGN KEY (`ID_category`) REFERENCES `categories` (`ID_category`),
  ADD CONSTRAINT `services_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`service_id`) REFERENCES `services` (`service_id`),
  ADD CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
