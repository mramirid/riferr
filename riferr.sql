-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 12, 2019 at 04:05 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

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
  `kode_buyer` int(11) NOT NULL,
  `nama_buyer` varchar(200) DEFAULT NULL,
  `psswrd_buyer` varchar(10) DEFAULT NULL,
  `nohp_buyer` varchar(15) DEFAULT NULL,
  `alamat_buyer` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `detail_jasa`
--

CREATE TABLE `detail_jasa` (
  `kode_kategori` int(11) NOT NULL,
  `kategori` varchar(200) DEFAULT NULL,
  `harga_jual` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `jual_jasa`
--

CREATE TABLE `jual_jasa` (
  `kode_jualjasa` int(11) NOT NULL,
  `tgl_jualjasa` date DEFAULT NULL,
  `kode_kategori` int(11) DEFAULT NULL,
  `kode_seller` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `seller`
--

CREATE TABLE `seller` (
  `kode_seller` int(11) NOT NULL,
  `nama_seller` varchar(200) DEFAULT NULL,
  `psswrd_seller` varchar(10) DEFAULT NULL,
  `nohp_seller` varchar(15) DEFAULT NULL,
  `alamat_seller` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `kode_trans` int(11) NOT NULL,
  `tgl_trans` date DEFAULT NULL,
  `nama_trans` varchar(200) DEFAULT NULL,
  `harga` varchar(10) DEFAULT NULL,
  `jumlah` int(11) DEFAULT NULL,
  `total` varchar(15) DEFAULT NULL,
  `status_trans` varchar(10) DEFAULT NULL,
  `kode_buyer` int(11) NOT NULL,
  `kode_jualjasa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buyer`
--
ALTER TABLE `buyer`
  ADD PRIMARY KEY (`kode_buyer`);

--
-- Indexes for table `detail_jasa`
--
ALTER TABLE `detail_jasa`
  ADD PRIMARY KEY (`kode_kategori`);

--
-- Indexes for table `jual_jasa`
--
ALTER TABLE `jual_jasa`
  ADD PRIMARY KEY (`kode_jualjasa`),
  ADD KEY `kode_seller` (`kode_seller`),
  ADD KEY `kode_kategori` (`kode_kategori`);

--
-- Indexes for table `seller`
--
ALTER TABLE `seller`
  ADD PRIMARY KEY (`kode_seller`);

--
-- Indexes for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`kode_trans`),
  ADD KEY `kode_buyer` (`kode_buyer`,`kode_jualjasa`),
  ADD KEY `kode_jualjasa` (`kode_jualjasa`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buyer`
--
ALTER TABLE `buyer`
  MODIFY `kode_buyer` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `detail_jasa`
--
ALTER TABLE `detail_jasa`
  MODIFY `kode_kategori` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jual_jasa`
--
ALTER TABLE `jual_jasa`
  MODIFY `kode_jualjasa` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seller`
--
ALTER TABLE `seller`
  MODIFY `kode_seller` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `kode_trans` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `jual_jasa`
--
ALTER TABLE `jual_jasa`
  ADD CONSTRAINT `jual_jasa_ibfk_1` FOREIGN KEY (`kode_seller`) REFERENCES `seller` (`kode_seller`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `jual_jasa_ibfk_2` FOREIGN KEY (`kode_kategori`) REFERENCES `detail_jasa` (`kode_kategori`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD CONSTRAINT `transaksi_ibfk_1` FOREIGN KEY (`kode_buyer`) REFERENCES `buyer` (`kode_buyer`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transaksi_ibfk_2` FOREIGN KEY (`kode_jualjasa`) REFERENCES `jual_jasa` (`kode_jualjasa`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
