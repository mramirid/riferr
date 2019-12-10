-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2019 at 02:07 PM
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
-- Database: `rifrerrs`
--

-- --------------------------------------------------------

--
-- Table structure for table `category_services`
--

CREATE TABLE `category_services` (
  `ID_category` int(11) NOT NULL,
  `category` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category_services`
--

INSERT INTO `category_services` (`ID_category`, `category`) VALUES
(1, 'cat1'),
(2, 'cat2'),
(3, 'cat3'),
(4, 'cat4');

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
(1, 1, 2, 'a modern design', 'i will design a modern design for your company', 12000, 'kholel.jpg,kholel 2.png'),
(2, 1, 2, '2 modern design', 'i will design 2 modern logo or design for your business', 24000, 'kholel.jpg,kholel 2.png'),
(3, 2, 3, '3 modern design', 'i will design 3 modern logo or design for your business', 36000, 'kholel.jpg,kholel 2.png'),
(4, 2, 2, '4 modern design', 'i will design 4 modern logo or design for your business', 48000, 'kholel.jpg,kholel 2.png'),
(5, 2, 3, '5 modern design', 'i will design 5 modern logo or design for your business', 60000, 'kholel.jpg,kholel 2.png'),
(6, 3, 3, 'an abstract picture', 'i will edit your photo become abstact', 5000, 'kholel.jpg,kholel 2.png'),
(7, 3, 3, '2 abstract picture', 'i will edit your photo become 2 abstract picture', 10000, 'kholel.jpg,kholel 2.png'),
(8, 4, 2, 'an invitation card', 'i will design an invitation card for your party', 2000, 'kholel.jpg,kholel 2.png'),
(9, 4, 3, 'modern invitation card design', 'i will design an invitation card with modern style for your party', 4000, 'kholel.jpg,kholel 2.png');

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

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`transaction_id`, `service_id`, `user_id`, `transaction_req`, `transaction_datetime`) VALUES
(2, 2, 2, '2', '2019-12-10 00:00:00'),
(3, 2, 2, '2', '2019-12-10 11:39:01');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_email` varchar(40) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_nickname` varchar(30) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_phone` varchar(30) NOT NULL,
  `user_address` varchar(50) NOT NULL,
  `user_role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_email`, `user_password`, `user_nickname`, `user_name`, `user_phone`, `user_address`, `user_role`) VALUES
(1, 'admin@admin.com', 'admin', 'admin', 'admin fiverr', '098000', 'jalan-in aja', 0),
(2, 'seller1@seller1.com', 'seller1', 'seller1', 'seller1 coy', '0980009', 'jalan-in aja1', 1),
(3, 'seller2@seller2.com', 'seller2', 'seller2', 'seller 2 coy', '098098', 'jalan-in aja 2', 1),
(4, 'buyer1@buyer.com', 'buyer1', 'buyer1', 'buyer 1 boy', '098098', 'jalan-in aza 1', 2),
(5, 'buyer2@buyer.com', 'buyer2', 'buyer2', 'buyer 2 boy', '0980900', 'jalan-in aza 2', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category_services`
--
ALTER TABLE `category_services`
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
-- AUTO_INCREMENT for table `category_services`
--
ALTER TABLE `category_services`
  MODIFY `ID_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `transaction_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_ibfk_1` FOREIGN KEY (`ID_category`) REFERENCES `category_services` (`ID_category`),
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
