-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 03, 2018 at 07:38 AM
-- Server version: 10.1.24-MariaDB
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_ticket`
--

-- --------------------------------------------------------

--
-- Table structure for table `priority`
--

CREATE TABLE `priority` (
  `id` int(11) NOT NULL,
  `priority_name` varchar(120) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `priority`
--

INSERT INTO `priority` (`id`, `priority_name`, `created_at`, `updated_at`) VALUES
(1, 'Low', '2018-11-02', '2018-11-02'),
(2, 'High', '2018-11-02', '2018-11-02'),
(3, 'Very High', '2018-11-02', '2018-11-02');

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE `ticket` (
  `id` int(11) NOT NULL,
  `user_id` varchar(120) NOT NULL,
  `ticket_number` varchar(120) NOT NULL,
  `ticket_status_id` varchar(120) NOT NULL,
  `ticket_description` longtext NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` date NOT NULL,
  `priority_id` varchar(120) NOT NULL,
  `status` enum('active','inactive') NOT NULL DEFAULT 'active',
  `updated_person` varchar(120) NOT NULL,
  `created_date` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ticket`
--

INSERT INTO `ticket` (`id`, `user_id`, `ticket_number`, `ticket_status_id`, `ticket_description`, `created_at`, `updated_at`, `priority_id`, `status`, `updated_person`, `created_date`) VALUES
(1, '1', 'TICKET001', '1', 'This is regarding your job scenerio.', '2018-11-02 04:08:08', '2018-11-02', '1', 'active', 'choudhary', '2018-11-02 04:08:08'),
(2, '1', 'TICKET002', '2', 'This is regarding user', '2018-11-02 22:50:34', '2018-11-02', '2', 'active', 'Admin', ''),
(3, '2', 'TICKET003', '3', 'regarding new project', '2018-11-02 23:47:15', '2018-11-02', '2', 'active', 'anup', ''),
(4, '1', 'TICKET004', '1', 'regarding my profile', '2018-11-02 23:48:22', '2018-11-02', '2', 'active', 'nikhil', ''),
(5, '1', 'TICKET005', '3', 'regarding cv', '2018-11-03 11:54:06', '2018-11-03', '3', 'active', 'Anup', '');

-- --------------------------------------------------------

--
-- Table structure for table `ticket_status`
--

CREATE TABLE `ticket_status` (
  `id` int(11) NOT NULL,
  `status` varchar(120) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ticket_status`
--

INSERT INTO `ticket_status` (`id`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Pending', '2018-11-02', '2018-11-02'),
(2, 'Running', '2018-11-02', '2018-11-02'),
(3, 'Completed', '2018-11-02', '2018-11-02');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` enum('active','inactive') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `status`, `created_at`, `updated_at`) VALUES
(1, 'admin@tecture.in', '123456', 'active', '2018-04-05 13:06:53', '2018-04-05 13:06:53'),
(2, 'anupc09@gmail.com', 'anup123', 'active', '2018-11-01 21:38:10', '2018-11-02 18:14:44'),
(3, 'ticket@gmail.com', 'ticket@123', 'active', '2018-11-01 18:30:00', '2018-11-02 18:15:32'),
(4, 'suprath@gmail.com', 'suprath@123', 'active', '2018-11-01 22:42:11', '2018-11-02 18:16:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `priority`
--
ALTER TABLE `priority`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ticket_status`
--
ALTER TABLE `ticket_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `priority`
--
ALTER TABLE `priority`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `ticket_status`
--
ALTER TABLE `ticket_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
