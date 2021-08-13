-- --------------------------------------------------------
-- Sunucu:                       127.0.0.1
-- Sunucu sürümü:                5.7.31 - MySQL Community Server (GPL)
-- Sunucu İşletim Sistemi:       Win64
-- HeidiSQL Sürüm:               11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- gorillas_controlsis için veritabanı yapısı dökülüyor
CREATE DATABASE IF NOT EXISTS `gorillas_controlsis` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `gorillas_controlsis`;

-- tablo yapısı dökülüyor gorillas_controlsis.authorized
CREATE TABLE IF NOT EXISTS `authorized` (
  `authorizedid` int(11) NOT NULL AUTO_INCREMENT,
  `companyget` int(11) NOT NULL DEFAULT '1',
  `regionget` int(11) NOT NULL DEFAULT '1',
  `unitget` int(11) NOT NULL DEFAULT '1',
  `departmanget` int(11) NOT NULL DEFAULT '1',
  `profilephoto` varchar(500) DEFAULT NULL,
  `digitalcv` varchar(500) DEFAULT NULL,
  `authorized` varchar(100) NOT NULL,
  `tc` varchar(11) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `adres` varchar(1500) NOT NULL,
  `civilstatusget` varchar(50) NOT NULL,
  `children` varchar(50) NOT NULL,
  `workingstart` date NOT NULL,
  `workingstop` date NOT NULL,
  `performance` varchar(50) NOT NULL,
  `pirim` varchar(50) NOT NULL,
  `pay` varchar(50) NOT NULL,
  `mesai` varchar(50) NOT NULL,
  `mesaidays` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL,
  PRIMARY KEY (`authorizedid`) USING BTREE,
  KEY `companyget` (`companyget`),
  KEY `regionget` (`regionget`),
  KEY `unitget` (`unitget`),
  KEY `departmanget` (`departmanget`),
  CONSTRAINT `FK_authorized_company` FOREIGN KEY (`companyget`) REFERENCES `company` (`companyid`),
  CONSTRAINT `FK_authorized_departman` FOREIGN KEY (`departmanget`) REFERENCES `departman` (`departmanid`),
  CONSTRAINT `FK_authorized_region` FOREIGN KEY (`regionget`) REFERENCES `region` (`regionid`),
  CONSTRAINT `FK_authorized_unit` FOREIGN KEY (`unitget`) REFERENCES `unit` (`unitid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- gorillas_controlsis.authorized: ~0 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `authorized` DISABLE KEYS */;
INSERT IGNORE INTO `authorized` (`authorizedid`, `companyget`, `regionget`, `unitget`, `departmanget`, `profilephoto`, `digitalcv`, `authorized`, `tc`, `tel`, `email`, `adres`, `civilstatusget`, `children`, `workingstart`, `workingstop`, `performance`, `pirim`, `pay`, `mesai`, `mesaidays`, `gender`) VALUES
	(11, 1, 1, 1, 2, 'user1-128x128.jpg', 'test-cv.pdf', 'Mert Oz', '26519819586', '+905447893636', 'mertoz@gmail.com', 'Ozluce/Bursa', 'Bekar', 'Çocuk yok', '2020-09-01', '2020-09-30', '0', '0', '3324.70', '0', '0', 'Erkek');
/*!40000 ALTER TABLE `authorized` ENABLE KEYS */;

-- tablo yapısı dökülüyor gorillas_controlsis.check
CREATE TABLE IF NOT EXISTS `check` (
  `checkid` int(11) NOT NULL AUTO_INCREMENT,
  `companyget` int(11) NOT NULL,
  `regionget` int(11) NOT NULL,
  `unitget` int(11) NOT NULL,
  `departmanget` int(11) NOT NULL,
  `authorizedget` int(11) NOT NULL,
  `checkdate` date NOT NULL,
  `check1` int(11) NOT NULL,
  `check2` int(11) NOT NULL,
  `check3` int(11) NOT NULL,
  `check4` int(11) NOT NULL,
  `check5` int(11) NOT NULL,
  `check6` int(11) NOT NULL,
  `check7` int(11) NOT NULL,
  `check8` int(11) NOT NULL,
  `check9` int(11) NOT NULL,
  `check10` int(11) NOT NULL,
  `check11` int(11) NOT NULL,
  `check12` int(11) NOT NULL,
  `check13` int(11) NOT NULL,
  `check14` int(11) NOT NULL,
  `check15` int(11) NOT NULL,
  `content1` varchar(500) NOT NULL,
  `content2` varchar(500) NOT NULL,
  `content3` varchar(500) NOT NULL,
  `content4` varchar(500) NOT NULL,
  `suggestion` varchar(1000) DEFAULT NULL,
  `location` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`checkid`),
  KEY `companyget` (`companyget`),
  KEY `regionget` (`regionget`),
  KEY `unitget` (`unitget`),
  KEY `departmanget` (`departmanget`),
  KEY `authorizedget` (`authorizedget`),
  CONSTRAINT `FK_check_authorized` FOREIGN KEY (`authorizedget`) REFERENCES `authorized` (`authorizedid`),
  CONSTRAINT `FK_check_company` FOREIGN KEY (`companyget`) REFERENCES `company` (`companyid`),
  CONSTRAINT `FK_check_departman` FOREIGN KEY (`departmanget`) REFERENCES `departman` (`departmanid`),
  CONSTRAINT `FK_check_region` FOREIGN KEY (`regionget`) REFERENCES `region` (`regionid`),
  CONSTRAINT `FK_check_unit` FOREIGN KEY (`unitget`) REFERENCES `unit` (`unitid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- gorillas_controlsis.check: ~0 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `check` DISABLE KEYS */;
INSERT IGNORE INTO `check` (`checkid`, `companyget`, `regionget`, `unitget`, `departmanget`, `authorizedget`, `checkdate`, `check1`, `check2`, `check3`, `check4`, `check5`, `check6`, `check7`, `check8`, `check9`, `check10`, `check11`, `check12`, `check13`, `check14`, `check15`, `content1`, `content2`, `content3`, `content4`, `suggestion`, `location`) VALUES
	(13, 1, 1, 1, 2, 11, '2020-09-13', 7, 9, 9, 8, 5, 7, 10, 10, 8, 8, 9, 6, 5, 7, 9, 'unnamed.jpg', 'unnamed.png', 'denetleme_3245.png', 'aktueryal-hizmetler-hero-title.jpg', 'Firma Test Asamasinda oldukca basarili ilerlemektedir Bu bir test Denetimidir.', 'Besevler, Meyve Sk. No:4, 16110 Nilufer/Bursa, Turkiye');
/*!40000 ALTER TABLE `check` ENABLE KEYS */;

-- tablo yapısı dökülüyor gorillas_controlsis.comment
CREATE TABLE IF NOT EXISTS `comment` (
  `checkcommentid` int(11) NOT NULL AUTO_INCREMENT,
  `referancenumber` varchar(50) DEFAULT NULL,
  `companyget` int(11) NOT NULL DEFAULT '1',
  `regionget` int(11) NOT NULL DEFAULT '1',
  `unitget` int(11) NOT NULL DEFAULT '1',
  `date` date NOT NULL,
  `namesurname` varchar(50) NOT NULL DEFAULT '0',
  `tc` varchar(50) NOT NULL DEFAULT '0',
  `tel` varchar(50) NOT NULL DEFAULT '0',
  `email` varchar(50) NOT NULL DEFAULT '0',
  `subject` varchar(150) NOT NULL DEFAULT '0',
  `comment` varchar(1000) NOT NULL DEFAULT '0',
  `color` varchar(50) NOT NULL DEFAULT 'fas fa-star text-warning',
  PRIMARY KEY (`checkcommentid`),
  KEY `companyget` (`companyget`),
  KEY `regionget` (`regionget`),
  KEY `unitget` (`unitget`),
  CONSTRAINT `FK_comment_company` FOREIGN KEY (`companyget`) REFERENCES `company` (`companyid`),
  CONSTRAINT `FK_comment_region` FOREIGN KEY (`regionget`) REFERENCES `region` (`regionid`),
  CONSTRAINT `FK_comment_unit` FOREIGN KEY (`unitget`) REFERENCES `unit` (`unitid`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- gorillas_controlsis.comment: ~11 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT IGNORE INTO `comment` (`checkcommentid`, `referancenumber`, `companyget`, `regionget`, `unitget`, `date`, `namesurname`, `tc`, `tel`, `email`, `subject`, `comment`, `color`) VALUES
	(9, '25541365', 1, 1, 1, '2020-08-28', 'yens1', 'asdasd', '+90', 'deneme2926@gmail.com', 'asdasdas', 'asdasd', 'fas fa-check text-primary'),
	(10, '25541364', 1, 1, 1, '2020-08-13', 'yen2', '44523687', '+90', 'deneme22996@gmail.com', 'asdasdas', 'asdasd', 'fas fa-check text-primary'),
	(11, '41236589', 1, 1, 1, '2020-08-13', 'yens1', '44523687', '+90', 'deneme2926@gmail.com', 'asdasdas', '12312', 'fas fa-star text-warning'),
	(12, '41236589', 1, 1, 1, '2020-08-20', 'ozan cengiz1', '44523687', '+90', 'asdas@gmail.com', 'asdasdas', '123123', 'fas fa-check text-primary'),
	(15, '25541364', 1, 1, 1, '2020-08-20', 'ozan cengiz', '44523687', '+90', 'asdas@gmail.com', '123123', '123123', 'fas fa-info-circle text-danger'),
	(16, '25541364', 1, 1, 1, '2020-08-12', 'ozan cengiz', '44523687', '+90', 'd2eneme@gmail.com', 'asdasdas', 'asdasdas', 'fas fa-check text-primary'),
	(17, '25541364', 1, 1, 1, '2020-08-20', 'cenk kaek', '44523687', '+90', 'deneme2926@gmail.com', 'asdasdas', '12', 'fas fa-check text-primary'),
	(18, '25541365', 1, 1, 1, '2020-08-20', 'ozan cengiz', '44523687', '+90', 'asdas@gmail.com', 'asdasdas', 'qweqw', 'fas fa-check text-primary'),
	(19, '25541365', 1, 1, 1, '2020-08-13', 'ozan cengiz', '1155746987544', '+90', 'deneme2996@gmail.com', 'asdasdas', '12', 'fas fa-check text-primary'),
	(22, '25541365', 1, 1, 1, '2020-08-21', 'ALI YEN', '44523687', '+90', 'deneme2996@gmail.com', 'RENK', '1', 'fas fa-star text-warning'),
	(23, '25541364', 1, 1, 1, '2020-08-12', 'ozan cengiz', '44523687', '+90', 'tzdeneme@gmail.com', '123123', '16516', 'fas fa-check text-primary');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;

-- tablo yapısı dökülüyor gorillas_controlsis.company
CREATE TABLE IF NOT EXISTS `company` (
  `companyid` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(100) NOT NULL,
  PRIMARY KEY (`companyid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- gorillas_controlsis.company: ~3 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT IGNORE INTO `company` (`companyid`, `company`) VALUES
	(1, 'Fiat'),
	(2, 'Ford'),
	(3, 'Volvo');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;

-- tablo yapısı dökülüyor gorillas_controlsis.departman
CREATE TABLE IF NOT EXISTS `departman` (
  `departmanid` int(11) NOT NULL AUTO_INCREMENT,
  `departman` varchar(100) NOT NULL DEFAULT 'test departman',
  PRIMARY KEY (`departmanid`) USING BTREE,
  KEY `departman` (`departman`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- gorillas_controlsis.departman: ~2 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `departman` DISABLE KEYS */;
INSERT IGNORE INTO `departman` (`departmanid`, `departman`) VALUES
	(2, 'Halk ve İlişkiler'),
	(1, 'Hukuk');
/*!40000 ALTER TABLE `departman` ENABLE KEYS */;

-- tablo yapısı dökülüyor gorillas_controlsis.events
CREATE TABLE IF NOT EXISTS `events` (
  `EventID` int(11) NOT NULL AUTO_INCREMENT,
  `Subject` varchar(100) NOT NULL,
  `Description` varchar(500) DEFAULT NULL,
  `Start` datetime NOT NULL,
  `End` datetime DEFAULT NULL,
  `ThemeColor` varchar(10) DEFAULT NULL,
  `IsFullDay` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`EventID`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

-- gorillas_controlsis.events: ~32 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT IGNORE INTO `events` (`EventID`, `Subject`, `Description`, `Start`, `End`, `ThemeColor`, `IsFullDay`) VALUES
	(1, 'Test', 'Test etkinliği', '2020-07-09 00:00:00', NULL, '#007bff', b'1'),
	(2, 'Test', 'Test etkinligi', '2020-07-09 00:00:00', NULL, 'red', b'1'),
	(4, 'DASDSA', 'sd4', '2020-07-07 00:00:00', NULL, 'orange', b'1'),
	(5, '12312', '12312', '2020-07-24 00:00:00', NULL, 'red', b'1'),
	(6, 'ASDASD', 'ASDSAD', '2020-06-29 00:00:00', NULL, 'red', b'1'),
	(8, 'FSDFSD', 'FSD', '2020-07-27 00:00:00', '2020-07-28 00:00:00', 'orange', b'0'),
	(9, '12312', '3213', '2020-08-04 00:00:00', NULL, 'yellow', b'1'),
	(10, '21312', '12312', '2020-07-20 00:00:00', NULL, 'orange', b'1'),
	(11, '3213123', '12312', '2020-07-13 00:00:00', NULL, '#76FF03', b'1'),
	(12, 'asd', 'asd', '2020-07-22 00:00:00', NULL, '#00B0FF', b'1'),
	(13, '123', '12312', '2020-07-16 00:00:00', NULL, '#00B0FF', b'1'),
	(14, '123', '21321', '2020-07-10 00:00:00', NULL, '#00B0FF', b'1'),
	(15, '123', '12321', '2020-07-18 00:00:00', NULL, '#007bff', b'1'),
	(16, 'wer', 'werw', '2020-07-30 00:00:00', NULL, '#28a745', b'1'),
	(17, 'wer', 'wer', '2020-08-14 00:00:00', NULL, '#f39c12', b'1'),
	(18, '234', 'weww23', '2020-07-15 00:00:00', NULL, '#dc3545', b'1'),
	(19, '234234', '23423', '2020-07-16 00:00:00', NULL, '#007bff', b'1'),
	(20, '123', '12312', '2020-08-18 00:00:00', NULL, 'red', b'1'),
	(21, '234', '234234', '2020-07-29 00:00:00', NULL, '#2cb64b', b'1'),
	(22, '123', '213', '2020-07-26 00:00:00', NULL, 'red', b'1'),
	(23, 'sddsa', 'dsasad', '2020-08-28 00:00:00', NULL, '#28a745', b'1'),
	(24, 'asdasd', 'asdasd', '2020-08-26 00:00:00', NULL, '#f39c12', b'1'),
	(25, 'asdsad', 'asdsad', '2020-08-08 00:00:00', NULL, '#007bff', b'1'),
	(26, 'asdasd', 'asdasd', '2020-08-09 00:00:00', NULL, 'red', b'1'),
	(27, '12312', '123123', '2020-07-01 00:00:00', NULL, '#007bff', b'1'),
	(28, '12321', '123123', '2020-07-30 00:00:00', '2020-07-31 00:00:00', '#007bff', b'0'),
	(29, 'dasdd', 'ali', '2020-08-06 00:00:00', NULL, '#007bff', b'1'),
	(30, 'Deneme', 'adsADASF', '2020-07-15 00:00:00', '2020-08-07 00:00:00', '#28a745', b'0'),
	(31, 'cdasfad', 'dasfasd', '2020-08-01 00:00:00', NULL, 'Mavi', b'1'),
	(32, 'Rhymer', 'Rhymer', '2020-08-27 00:00:00', NULL, 'Mavi', b'1'),
	(33, 'Rhymer1', 'Rhymer1', '2020-08-27 00:00:00', NULL, 'Yesil', b'1'),
	(34, '1', 'test', '2020-09-16 00:00:00', NULL, '#007bff', b'1');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;

-- tablo yapısı dökülüyor gorillas_controlsis.home
CREATE TABLE IF NOT EXISTS `home` (
  `homeid` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(1000) NOT NULL DEFAULT 'test',
  `descriptions` varchar(1000) NOT NULL DEFAULT 'test',
  `companyget` int(11) NOT NULL,
  `regionget` int(11) NOT NULL,
  `unitget` int(11) NOT NULL,
  `departmanget` int(11) NOT NULL,
  `eventsstart` date NOT NULL,
  `eventsend` date NOT NULL,
  `processget` int(11) NOT NULL,
  `color` varchar(50) NOT NULL,
  `content1` varchar(500) NOT NULL,
  `content2` varchar(500) NOT NULL,
  `content3` varchar(500) NOT NULL,
  `content4` varchar(500) NOT NULL,
  PRIMARY KEY (`homeid`) USING BTREE,
  KEY `companyget` (`companyget`),
  KEY `processget` (`processget`),
  KEY `regionget` (`regionget`),
  KEY `unitget` (`unitget`),
  KEY `departmanget` (`departmanget`),
  CONSTRAINT `FK_event_company` FOREIGN KEY (`companyget`) REFERENCES `company` (`companyid`),
  CONSTRAINT `FK_event_departman` FOREIGN KEY (`departmanget`) REFERENCES `departman` (`departmanid`),
  CONSTRAINT `FK_event_process` FOREIGN KEY (`processget`) REFERENCES `process` (`processid`),
  CONSTRAINT `FK_event_region` FOREIGN KEY (`regionget`) REFERENCES `region` (`regionid`),
  CONSTRAINT `FK_event_unit` FOREIGN KEY (`unitget`) REFERENCES `unit` (`unitid`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- gorillas_controlsis.home: ~0 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `home` DISABLE KEYS */;
INSERT IGNORE INTO `home` (`homeid`, `subject`, `descriptions`, `companyget`, `regionget`, `unitget`, `departmanget`, `eventsstart`, `eventsend`, `processget`, `color`, `content1`, `content2`, `content3`, `content4`) VALUES
	(21, 'Test Urun Akisi', 'test icerik mesaji', 1, 1, 1, 2, '2020-09-01', '2020-09-30', 3, 'red', 'prod-1.jpg', 'prod-3.jpg', 'prod-4.jpg', 'prod-5.jpg');
/*!40000 ALTER TABLE `home` ENABLE KEYS */;

-- tablo yapısı dökülüyor gorillas_controlsis.invoice
CREATE TABLE IF NOT EXISTS `invoice` (
  `invoiceid` int(11) NOT NULL AUTO_INCREMENT,
  `companyget` int(11) NOT NULL DEFAULT '1',
  `regionget` int(11) NOT NULL DEFAULT '1',
  `unitget` int(11) NOT NULL DEFAULT '1',
  `authorizedget` int(11) NOT NULL DEFAULT '1',
  `personelget` int(11) NOT NULL DEFAULT '1',
  `referancenumber` varchar(50) DEFAULT NULL,
  `date` date NOT NULL,
  `namesurname` varchar(50) NOT NULL,
  `tc` varchar(50) NOT NULL,
  `tel` varchar(50) NOT NULL,
  `adres` varchar(500) NOT NULL,
  `email` varchar(50) NOT NULL,
  `product` varchar(50) NOT NULL,
  `description` varchar(1500) NOT NULL,
  `subtotal` varchar(50) NOT NULL,
  `tax` varchar(50) NOT NULL,
  `total` varchar(50) NOT NULL,
  `pay` varchar(50) NOT NULL DEFAULT 'Nakit.png',
  PRIMARY KEY (`invoiceid`),
  KEY `companyget` (`companyget`) USING BTREE,
  KEY `regionget` (`regionget`) USING BTREE,
  KEY `unitget` (`unitget`) USING BTREE,
  KEY `authorizedget` (`authorizedget`),
  KEY `personelget` (`personelget`),
  CONSTRAINT `FK_invoice_authorized` FOREIGN KEY (`authorizedget`) REFERENCES `authorized` (`authorizedid`),
  CONSTRAINT `FK_invoice_company` FOREIGN KEY (`companyget`) REFERENCES `company` (`companyid`),
  CONSTRAINT `FK_invoice_personel` FOREIGN KEY (`personelget`) REFERENCES `personel` (`personelid`),
  CONSTRAINT `FK_invoice_region` FOREIGN KEY (`regionget`) REFERENCES `region` (`regionid`),
  CONSTRAINT `FK_invoice_unit` FOREIGN KEY (`unitget`) REFERENCES `unit` (`unitid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- gorillas_controlsis.invoice: ~0 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
INSERT IGNORE INTO `invoice` (`invoiceid`, `companyget`, `regionget`, `unitget`, `authorizedget`, `personelget`, `referancenumber`, `date`, `namesurname`, `tc`, `tel`, `adres`, `email`, `product`, `description`, `subtotal`, `tax`, `total`, `pay`) VALUES
	(5, 1, 1, 1, 11, 52, '56958233', '2020-09-01', 'Osman Sever', '55478923411', '+905415668585', 'Ozluce/Bursa', 'osmansever@gmail.com', 'bot', 'kahverengi su gecirmez bot', '350', '63.00', '413.00', 'Nakit.png');
/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;

-- tablo yapısı dökülüyor gorillas_controlsis.messagebox
CREATE TABLE IF NOT EXISTS `messagebox` (
  `messageid` int(11) NOT NULL AUTO_INCREMENT,
  `namesurname` varchar(100) NOT NULL,
  `youremail` varchar(100) NOT NULL,
  `subject` varchar(500) NOT NULL,
  `message` varchar(1500) NOT NULL,
  `referancenumber` varchar(50) DEFAULT NULL,
  `date` date NOT NULL,
  `color` varchar(50) NOT NULL DEFAULT 'fas fa-star text-warning',
  PRIMARY KEY (`messageid`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- gorillas_controlsis.messagebox: ~4 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `messagebox` DISABLE KEYS */;
INSERT IGNORE INTO `messagebox` (`messageid`, `namesurname`, `youremail`, `subject`, `message`, `referancenumber`, `date`, `color`) VALUES
	(19, 'ozan cengiz', 'deneme2996@gmail.com', 'asdasdas', '213', '41236589', '2020-08-20', 'fas fa-check text-primary'),
	(21, 'ozan cengiz1', 'deneme2996@gmail.com', 'asdasdas', '12', '41236589', '2020-08-20', 'fas fa-star text-warning'),
	(22, 'yen2', 'deneme2996@gmail.com', '21312', '1', '41236589', '2020-08-20', 'fas fa-info-circle text-danger'),
	(24, 'Emir ylmaz', 'deneme2996@gmail.com', 'test son ', 'test mesajidir.', NULL, '2020-09-30', 'fas fa-star text-warning');
/*!40000 ALTER TABLE `messagebox` ENABLE KEYS */;

-- tablo yapısı dökülüyor gorillas_controlsis.notice
CREATE TABLE IF NOT EXISTS `notice` (
  `noticeid` int(11) NOT NULL AUTO_INCREMENT,
  `notice` varchar(1000) NOT NULL DEFAULT 'test notice',
  `companyget` int(11) NOT NULL,
  `regionget` int(11) NOT NULL,
  `unitget` int(11) NOT NULL,
  `departmanget` int(11) NOT NULL,
  `noticestart` date NOT NULL,
  `noticeend` date NOT NULL,
  `processget` int(11) NOT NULL,
  `color` varchar(50) NOT NULL,
  PRIMARY KEY (`noticeid`) USING BTREE,
  KEY `companyget` (`companyget`),
  KEY `processget` (`processget`),
  KEY `regionget` (`regionget`),
  KEY `unitget` (`unitget`),
  KEY `departmanget` (`departmanget`),
  CONSTRAINT `FK_notice_company` FOREIGN KEY (`companyget`) REFERENCES `company` (`companyid`),
  CONSTRAINT `FK_notice_departman` FOREIGN KEY (`departmanget`) REFERENCES `departman` (`departmanid`),
  CONSTRAINT `FK_notice_process` FOREIGN KEY (`processget`) REFERENCES `process` (`processid`),
  CONSTRAINT `FK_notice_region` FOREIGN KEY (`regionget`) REFERENCES `region` (`regionid`),
  CONSTRAINT `FK_notice_unit` FOREIGN KEY (`unitget`) REFERENCES `unit` (`unitid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- gorillas_controlsis.notice: ~3 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `notice` DISABLE KEYS */;
INSERT IGNORE INTO `notice` (`noticeid`, `notice`, `companyget`, `regionget`, `unitget`, `departmanget`, `noticestart`, `noticeend`, `processget`, `color`) VALUES
	(2, 'Ilgili Birim Toplanti', 1, 1, 1, 2, '2020-07-01', '2020-07-14', 2, 'blue'),
	(3, 'b', 1, 1, 1, 2, '2020-07-01', '2020-07-30', 3, 'yellow'),
	(4, '123123', 1, 1, 1, 2, '2020-07-02', '2020-07-16', 1, 'Yesil-Yüksek Öncelikli');
/*!40000 ALTER TABLE `notice` ENABLE KEYS */;

-- tablo yapısı dökülüyor gorillas_controlsis.personel
CREATE TABLE IF NOT EXISTS `personel` (
  `personelid` int(11) NOT NULL AUTO_INCREMENT,
  `companyget` int(11) NOT NULL DEFAULT '1',
  `regionget` int(11) NOT NULL DEFAULT '1',
  `unitget` int(11) NOT NULL DEFAULT '1',
  `departmanget` int(11) NOT NULL DEFAULT '1',
  `authorizedget` int(11) NOT NULL DEFAULT '1',
  `profilephoto` varchar(500) DEFAULT NULL,
  `digitalcv` varchar(500) DEFAULT NULL,
  `personel` varchar(100) NOT NULL,
  `tc` varchar(11) NOT NULL,
  `tel` varchar(13) NOT NULL,
  `email` varchar(100) NOT NULL,
  `adres` varchar(1500) NOT NULL,
  `civilstatusget` varchar(50) NOT NULL,
  `children` varchar(50) NOT NULL,
  `workingstart` date NOT NULL,
  `workingstop` date NOT NULL,
  `performance` varchar(50) NOT NULL,
  `pirim` varchar(50) NOT NULL,
  `pay` varchar(50) NOT NULL,
  `mesai` varchar(50) NOT NULL,
  `mesaidays` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL,
  PRIMARY KEY (`personelid`) USING BTREE,
  KEY `companyget` (`companyget`),
  KEY `regionget` (`regionget`),
  KEY `unitget` (`unitget`),
  KEY `departmanget` (`departmanget`),
  KEY `authorizedget` (`authorizedget`),
  CONSTRAINT `FK_personel_authorized` FOREIGN KEY (`authorizedget`) REFERENCES `authorized` (`authorizedid`),
  CONSTRAINT `FK_personel_company` FOREIGN KEY (`companyget`) REFERENCES `company` (`companyid`),
  CONSTRAINT `FK_personel_departman` FOREIGN KEY (`departmanget`) REFERENCES `departman` (`departmanid`),
  CONSTRAINT `FK_personel_region` FOREIGN KEY (`regionget`) REFERENCES `region` (`regionid`),
  CONSTRAINT `FK_personel_unit` FOREIGN KEY (`unitget`) REFERENCES `unit` (`unitid`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;

-- gorillas_controlsis.personel: ~0 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `personel` DISABLE KEYS */;
INSERT IGNORE INTO `personel` (`personelid`, `companyget`, `regionget`, `unitget`, `departmanget`, `authorizedget`, `profilephoto`, `digitalcv`, `personel`, `tc`, `tel`, `email`, `adres`, `civilstatusget`, `children`, `workingstart`, `workingstop`, `performance`, `pirim`, `pay`, `mesai`, `mesaidays`, `gender`) VALUES
	(52, 1, 1, 1, 2, 11, 'user6-128x128.jpg', 'test-cv.pdf', 'Huseyin Kazan', '26519819586', '+905447893636', 'huseyinkazanc@gmail.com', 'FSM/Bursa', 'Bekar', 'Çocuk yok', '2020-09-01', '2020-09-30', '0', '0', '2324.70', '0', '0', 'Erkek');
/*!40000 ALTER TABLE `personel` ENABLE KEYS */;

-- tablo yapısı dökülüyor gorillas_controlsis.process
CREATE TABLE IF NOT EXISTS `process` (
  `processid` int(11) NOT NULL AUTO_INCREMENT,
  `process` varchar(50) NOT NULL,
  PRIMARY KEY (`processid`) USING BTREE,
  KEY `process` (`process`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- gorillas_controlsis.process: ~4 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `process` DISABLE KEYS */;
INSERT IGNORE INTO `process` (`processid`, `process`) VALUES
	(3, 'Continues'),
	(4, 'Failed'),
	(2, 'Successful'),
	(1, 'Waiting');
/*!40000 ALTER TABLE `process` ENABLE KEYS */;

-- tablo yapısı dökülüyor gorillas_controlsis.region
CREATE TABLE IF NOT EXISTS `region` (
  `regionid` int(11) NOT NULL AUTO_INCREMENT,
  `region` varchar(100) NOT NULL,
  `companyget` int(11) NOT NULL,
  PRIMARY KEY (`regionid`) USING BTREE,
  KEY `companyget` (`companyget`),
  CONSTRAINT `FK_region_company` FOREIGN KEY (`companyget`) REFERENCES `company` (`companyid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- gorillas_controlsis.region: ~2 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `region` DISABLE KEYS */;
INSERT IGNORE INTO `region` (`regionid`, `region`, `companyget`) VALUES
	(1, 'Bursa', 1),
	(2, 'Istanbul', 2);
/*!40000 ALTER TABLE `region` ENABLE KEYS */;

-- tablo yapısı dökülüyor gorillas_controlsis.ucretbordro
CREATE TABLE IF NOT EXISTS `ucretbordro` (
  `ucretbordroid` int(11) NOT NULL AUTO_INCREMENT,
  `sgksabiti` double NOT NULL DEFAULT '0',
  `sgkisveren` double NOT NULL DEFAULT '0',
  `isverenissizsigfon` double NOT NULL DEFAULT '0',
  `isverenmaliyet` double NOT NULL DEFAULT '0',
  `nrkazanc` double NOT NULL DEFAULT '0',
  `iszsigiscipayi` double NOT NULL DEFAULT '0',
  `sgkiscipayi` double NOT NULL DEFAULT '0',
  `gvmahtari` double NOT NULL DEFAULT '0',
  `gelirvergisi` double NOT NULL DEFAULT '0',
  `agi` double NOT NULL DEFAULT '0',
  `kendiagiyuzdesi` double NOT NULL DEFAULT '0',
  `esagiyuzdesi` double NOT NULL DEFAULT '0',
  `birveikicocukagiyuzdesi` double NOT NULL DEFAULT '0',
  `uccocukyuzdesi` double NOT NULL DEFAULT '0',
  `dortveuzericocukyuzdesi` double NOT NULL DEFAULT '0',
  `damgavergi` double NOT NULL DEFAULT '0',
  `netkazanc` double NOT NULL DEFAULT '0',
  `gunlukkazanc` double NOT NULL DEFAULT '0',
  `pirimyuzdesi` double NOT NULL DEFAULT '0',
  `mesaiucreti` double NOT NULL DEFAULT '0',
  `yoneticifark` double NOT NULL DEFAULT '0',
  `yoneticipirimyuzdesi` double NOT NULL DEFAULT '0',
  `yoneticimesaiucreti` double NOT NULL DEFAULT '0',
  `pirimlimit` double(22,0) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ucretbordroid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- gorillas_controlsis.ucretbordro: ~0 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `ucretbordro` DISABLE KEYS */;
INSERT IGNORE INTO `ucretbordro` (`ucretbordroid`, `sgksabiti`, `sgkisveren`, `isverenissizsigfon`, `isverenmaliyet`, `nrkazanc`, `iszsigiscipayi`, `sgkiscipayi`, `gvmahtari`, `gelirvergisi`, `agi`, `kendiagiyuzdesi`, `esagiyuzdesi`, `birveikicocukagiyuzdesi`, `uccocukyuzdesi`, `dortveuzericocukyuzdesi`, `damgavergi`, `netkazanc`, `gunlukkazanc`, `pirimyuzdesi`, `mesaiucreti`, `yoneticifark`, `yoneticipirimyuzdesi`, `yoneticimesaiucreti`, `pirimlimit`) VALUES
	(1, 0.15, 456.17, 58.86, 3458.03, 2943, 29.43, 412.02, 2501.55, 375.23, 220.73, 0.5, 0.1, 0.075, 0.1, 0.05, 22.34, 2324.71, 98.1, 5, 98.1, 1000, 10, 100, 3000);
/*!40000 ALTER TABLE `ucretbordro` ENABLE KEYS */;

-- tablo yapısı dökülüyor gorillas_controlsis.unit
CREATE TABLE IF NOT EXISTS `unit` (
  `unitid` int(11) NOT NULL AUTO_INCREMENT,
  `unit` varchar(100) NOT NULL,
  `regionget` int(11) NOT NULL,
  PRIMARY KEY (`unitid`) USING BTREE,
  KEY `regionget` (`regionget`),
  CONSTRAINT `FK_unit_region` FOREIGN KEY (`regionget`) REFERENCES `region` (`regionid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- gorillas_controlsis.unit: ~2 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `unit` DISABLE KEYS */;
INSERT IGNORE INTO `unit` (`unitid`, `unit`, `regionget`) VALUES
	(1, 'Nilufer', 1),
	(2, 'Maltepe', 2);
/*!40000 ALTER TABLE `unit` ENABLE KEYS */;

-- tablo yapısı dökülüyor gorillas_controlsis.users
CREATE TABLE IF NOT EXISTS `users` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `profilephoto` varchar(500) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `usrname` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `tc` varchar(11) NOT NULL,
  `tel` varchar(13) NOT NULL,
  `role` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `securitykey` varchar(100) NOT NULL,
  `active` varchar(50) NOT NULL,
  PRIMARY KEY (`userid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- gorillas_controlsis.users: ~2 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT IGNORE INTO `users` (`userid`, `profilephoto`, `name`, `surname`, `usrname`, `password`, `email`, `tc`, `tel`, `role`, `gender`, `securitykey`, `active`) VALUES
	(1, 'user8-128x128.jpg', 'Emir', 'Ozer', 'admin', 'ce9a9e8b25de101abd27cd6043f479df', 'deneme2996@gmail.com', '22123127398', '+905555489171', 'Admin', 'Erkek', '7dd7c84db419d53c6f8e7ed05cf57029', 'fas fa-check text-primary'),
	(17, 'photo3.jpg', 'Ayse', 'Dasli', 'Ayse1', 'ce9a9e8b25de101abd27cd6043f479df', 'Ayse@gmail.com', '22123127398', '+905441226544', 'Yonetici', 'Erkek', '9eedcad21e8a6ddc590eafacffbb1ae6', 'fas fa-check text-primary');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- tablo yapısı dökülüyor gorillas_controlsis.yuklenenbelgeler
CREATE TABLE IF NOT EXISTS `yuklenenbelgeler` (
  `belgeid` int(11) NOT NULL AUTO_INCREMENT,
  `belge` varchar(500) NOT NULL,
  `date` date NOT NULL,
  `Description` varchar(1500) NOT NULL,
  PRIMARY KEY (`belgeid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- gorillas_controlsis.yuklenenbelgeler: ~0 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `yuklenenbelgeler` DISABLE KEYS */;
INSERT IGNORE INTO `yuklenenbelgeler` (`belgeid`, `belge`, `date`, `Description`) VALUES
	(6, 'denetim.pdf', '2020-09-01', 'Denetim test belgesi');
/*!40000 ALTER TABLE `yuklenenbelgeler` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
