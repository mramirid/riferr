-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2019 at 11:22 AM
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
-- Table structure for table `buyer`
--

CREATE TABLE `buyer` (
  `BUYERID` varchar(20) NOT NULL,
  `BUYERNICKNAME` varchar(20) NOT NULL,
  `BUYERPASSWORD` varchar(16) NOT NULL,
  `BUYERNAME` varchar(20) DEFAULT NULL,
  `BUYERPHONE` varchar(20) DEFAULT NULL,
  `BUYERADDRESS` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `buyer`
--

INSERT INTO `buyer` (`BUYERID`, `BUYERNICKNAME`, `BUYERPASSWORD`, `BUYERNAME`, `BUYERPHONE`, `BUYERADDRESS`) VALUES
('1', 'buyer1', 'buyer1', 'kholil nur manab', '088881', 'jalan jalan, jalan aja no.1'),
('2', 'buyer2', 'buyer2', 'manab nur kholil', '08811888', 'jalan jalan, jalan aja no.2');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `CATID` varchar(5) NOT NULL,
  `CATNAME` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`CATID`, `CATNAME`) VALUES
('1', 'cat1'),
('2', 'cat2'),
('3', 'cat3'),
('4', 'cat4'),
('5', 'cat5');

-- --------------------------------------------------------

--
-- Table structure for table `seller`
--

CREATE TABLE `seller` (
  `SELLERID` varchar(20) NOT NULL,
  `SELLERNICKNAME` varchar(20) NOT NULL,
  `SELLERPASSWORD` varchar(16) NOT NULL,
  `SELLERNAME` varchar(20) DEFAULT NULL,
  `SELLERPHONE` varchar(20) DEFAULT NULL,
  `SELLERADDRESS` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seller`
--

INSERT INTO `seller` (`SELLERID`, `SELLERNICKNAME`, `SELLERPASSWORD`, `SELLERNAME`, `SELLERPHONE`, `SELLERADDRESS`) VALUES
('1', 'seller1', 'seller1', 'manab kholil nur', '09123010', 'jalan in aja-01'),
('2', 'seller2', 'seller2', 'nur kholil manab', '091212093', 'jalan in aja-02');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `SERVICEID` varchar(20) NOT NULL,
  `SELLERID` varchar(20) NOT NULL,
  `CATID` varchar(5) DEFAULT NULL,
  `SERVICETITLE` varchar(50) NOT NULL,
  `SERVICEDESC` text NOT NULL,
  `SERVICEPRICE` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`SERVICEID`, `SELLERID`, `CATID`, `SERVICETITLE`, `SERVICEDESC`, `SERVICEPRICE`) VALUES
('1', '1', '1', '2 modern logo design', 'ini des anjay1', 12000),
('2', '1', '2', '3 modern logo design', 'ini des anjay', 13000),
('3', '1', '3', '4 modern logo design', 'ini des anjay', 14000),
('4', '1', '4', '5 modern logo design', 'ini des anjay', 15000),
('5', '1', '5', '6 modern logo desing', 'ini des anjay', 16000),
('6', '2', '1', '7 modern logo design', 'ini des anjay', 17000),
('7', '2', '3', '8 modern logo design', 'ini des anjay', 18000),
('8', '2', '4', '9 modern logo design', 'ini des anjay', 19000),
('9', '2', '5', '10 modern logo design', 'ini des anjay', 20000);

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `TRANSID` varchar(50) NOT NULL,
  `SERVICEID` varchar(20) DEFAULT NULL,
  `BUYERID` varchar(20) NOT NULL,
  `TRANSDATE` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buyer`
--
ALTER TABLE `buyer`
  ADD PRIMARY KEY (`BUYERID`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`CATID`);

--
-- Indexes for table `seller`
--
ALTER TABLE `seller`
  ADD PRIMARY KEY (`SELLERID`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`SERVICEID`),
  ADD KEY `FK_RELATIONSHIP_4` (`CATID`),
  ADD KEY `FK_RELATIONSHIP_6` (`SELLERID`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`TRANSID`),
  ADD KEY `FK_RELATIONSHIP_3` (`SERVICEID`),
  ADD KEY `FK_RELATIONSHIP_5` (`BUYERID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `FK_RELATIONSHIP_4` FOREIGN KEY (`CATID`) REFERENCES `categories` (`CATID`),
  ADD CONSTRAINT `FK_RELATIONSHIP_6` FOREIGN KEY (`SELLERID`) REFERENCES `seller` (`SELLERID`);

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `FK_RELATIONSHIP_3` FOREIGN KEY (`SERVICEID`) REFERENCES `services` (`SERVICEID`),
  ADD CONSTRAINT `FK_RELATIONSHIP_5` FOREIGN KEY (`BUYERID`) REFERENCES `buyer` (`BUYERID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
