-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2019 at 09:34 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `the_awesome_news_page`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `article_id` int(11) NOT NULL,
  `fk_article_image_id` int(11) NOT NULL,
  `article_title` varchar(200) NOT NULL,
  `article_content` varchar(3000) NOT NULL,
  `article_like_count` smallint(6) NOT NULL,
  `article_comment_count` smallint(6) NOT NULL,
  `article_date` datetime NOT NULL,
  `article_tags` varchar(128) NOT NULL,
  `fk_author_id` int(11) NOT NULL,
  `fk_category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`article_id`, `fk_article_image_id`, `article_title`, `article_content`, `article_like_count`, `article_comment_count`, `article_date`, `article_tags`, `fk_author_id`, `fk_category_id`) VALUES
(1, 16, 'Financial news: A new company is born today at the stock market', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.', 392, 12, '2018-04-11 07:00:00', 'NOT IN USE', 1, 1),
(2, 17, 'NOT IN USE', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus\r\n                    sit amet odio sodales placerat. Sed varius leo ac...', 392, 10, '2018-04-11 07:00:00', 'NOT IN USE', 1, 2),
(3, 18, 'NOT IN USE', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus\r\n                    sit amet odio sodales placerat. Sed varius leo ac...', 392, 10, '2018-04-11 07:00:00', 'NOT IN USE', 1, 3),
(4, 19, 'NOT IN USE', 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.', 0, 0, '2018-04-11 07:00:00', 'NOT IN USE', 1, 4),
(5, 20, 'NOT IN USE', 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.', 0, 0, '2018-04-11 07:00:00', 'NOT IN USE', 1, 5),
(6, 21, 'NOT IN USE', 'Sed a elit euismod augue semper congue sit amet ac sapien.', 0, 0, '2018-04-11 07:00:00', 'NOT IN USE', 1, 6),
(7, 22, 'NOT IN USE', 'Sed a elit euismod augue semper congue sit amet ac sapien.', 0, 0, '2018-04-11 07:00:00', 'NOT IN USE', 1, 7),
(8, 23, 'NOT IN USE', 'Sed a elit euismod augue semper congue sit amet ac sapien.', 0, 0, '2018-04-11 07:00:00', 'NOT IN USE', 1, 8),
(9, 24, 'NOT IN USE', 'Sed a elit euismod augue semper congue sit amet ac sapien.', 0, 0, '2018-04-11 07:00:00', 'NOT IN USE', 1, 1),
(10, 24, 'NOT IN USE', 'Sed a elit euismod augue semper congue sit amet ac sapien.', 0, 0, '2018-04-11 07:00:00', 'NOT IN USE', 1, 2),
(11, 24, 'NOT IN USE', 'Sed a elit euismod augue semper congue sit amet ac sapien.', 0, 0, '2018-04-11 07:00:00', 'NOT IN USE', 1, 3),
(12, 24, 'NOT IN USE', 'Sed a elit euismod augue semper congue sit amet ac sapien.', 0, 0, '2018-04-11 07:00:00', 'NOT IN USE', 1, 4),
(13, 24, 'NOT IN USE', 'Sed a elit euismod augue semper congue sit amet ac sapien.', 0, 0, '2018-04-11 07:00:00', 'NOT IN USE', 1, 5),
(14, 24, 'NOT IN USE', 'Sed a elit euismod augue semper congue sit amet ac sapien.', 0, 0, '2018-04-11 07:00:00', 'NOT IN USE', 1, 6),
(15, 24, 'NOT IN USE', 'Sed a elit euismod augue semper congue sit amet ac sapien.', 0, 0, '2018-04-11 07:00:00', 'NOT IN USE', 1, 7),
(16, 24, 'NOT IN USE', 'Sed a elit euismod augue semper congue sit amet ac sapien.', 0, 0, '2018-04-11 07:00:00', 'NOT IN USE', 1, 8);

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
  `author_id` int(11) NOT NULL,
  `author_name` varchar(64) NOT NULL,
  `fk_author_image_id` int(11) NOT NULL,
  `author_description` varchar(128) NOT NULL,
  `author_title` varchar(64) NOT NULL,
  `author_mail` varchar(128) NOT NULL,
  `author_hired_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`author_id`, `author_name`, `fk_author_image_id`, `author_description`, `author_title`, `author_mail`, `author_hired_date`) VALUES
(1, 'Christinne Williams', 32, 'BLA BLA BLA BLA BLA', 'EDITOR', 'Author@live.dk', '2019-06-04');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_title` varchar(64) NOT NULL,
  `category_link` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_title`, `category_link`) VALUES
(1, 'FINANCES', 'NOT IN USE'),
(2, 'POLITICS', 'NOT IN USE'),
(3, 'HEALTH', 'NOT IN USE'),
(4, 'TRAVEL', 'NOT IN USE'),
(5, 'SPORT', 'NOT IN USE'),
(6, 'TECHNOLOGY', 'NOT IN USE'),
(7, 'BUSINESS', 'NOT IN USE'),
(8, 'BREAKING NEWS', 'NOT IN USE');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL,
  `comment_user` varchar(64) NOT NULL,
  `comment_message` varchar(256) NOT NULL,
  `comment_timestamp` datetime NOT NULL,
  `fk_comment_image_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contact_id` int(11) NOT NULL,
  `contact_mail` varchar(128) NOT NULL,
  `contact_phone` varchar(64) NOT NULL,
  `contact_website` varchar(128) NOT NULL,
  `contact_address` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `image_id` int(11) NOT NULL,
  `image_name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`image_id`, `image_name`) VALUES
(1, '1.jpg'),
(2, '2.jpg'),
(3, '3.jpg'),
(4, '4.jpg'),
(5, '5.jpg'),
(6, '6.jpg'),
(7, '7.jpg'),
(8, '8.jpg'),
(9, '9.jpg'),
(10, '10.jpg'),
(11, '11.jpg'),
(12, '12.jpg'),
(13, '13.jpg'),
(14, '14.jpg'),
(15, '15.jpg'),
(16, '16.jpg'),
(17, '17.jpg'),
(18, '18.jpg'),
(19, '19.jpg'),
(20, '20.jpg'),
(21, '21.jpg'),
(22, '22.jpg'),
(23, '23.jpg'),
(24, '24.jpg'),
(25, '25.jpg'),
(26, '26.jpg'),
(27, '27.jpg'),
(28, '28.jpg'),
(29, '29.jpg'),
(30, '30.jpg'),
(31, '31.jpg'),
(32, '32.jpg'),
(33, 'video1.jpg'),
(34, 'video2.jpg'),
(35, 'video3.jpg'),
(36, 't1.jpg'),
(37, 't2.jpg'),
(38, 't3.jpg'),
(39, 't4.jpg'),
(40, 't5.jpg'),
(41, 't6.jpg'),
(42, 't7.jpg'),
(43, 't8.jpg'),
(44, 'bg1.jpg'),
(45, 'footer-add.gif'),
(46, 'hero-add.gif'),
(47, 'footer-add.gif'),
(48, 'chat.png'),
(49, 'favicon.ico'),
(50, 'like.png'),
(51, 'logo.png');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_email` varchar(256) NOT NULL,
  `user_password` varchar(64) NOT NULL,
  `user_name` varchar(64) NOT NULL,
  `fk_user_image_id` int(11) NOT NULL,
  `user_created_date` date NOT NULL,
  `user_birthday` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_email`, `user_password`, `user_name`, `fk_user_image_id`, `user_created_date`, `user_birthday`) VALUES
(1, 'Mikkelmbk@live.dk', 'hej', 'Aaron', 30, '2019-06-03', '1992-06-10'),
(2, 'Mikkelmbk@live.dk', 'hejhej', 'B-lake', 31, '2019-06-02', '1967-06-28'),
(3, 'Mikkelmbk@live.dk', 'hejhejhej', 'DeeNice', 32, '2019-06-11', '1993-04-12');

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `video_id` int(11) NOT NULL,
  `video_link` varchar(128) NOT NULL,
  `fk_video_image_id` int(11) NOT NULL,
  `video_title` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`article_id`);

--
-- Indexes for table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`author_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`image_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`video_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `article_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `author`
--
ALTER TABLE `author`
  MODIFY `author_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `video`
--
ALTER TABLE `video`
  MODIFY `video_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
