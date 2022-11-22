
-- Database: `demo` and php web application user
CREATE DATABASE assignment2;
GRANT USAGE ON *.* TO 'root'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON demo.* TO 'root'@'localhost';
FLUSH PRIVILEGES;

USE assignment2;

-
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `userEmail` varchar(255) NOT NULL,
  `userPWD` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;