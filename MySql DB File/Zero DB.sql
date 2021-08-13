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


-- oasisv2 için veritabanı yapısı dökülüyor
CREATE DATABASE IF NOT EXISTS `oasisv2` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `oasisv2`;

-- tablo yapısı dökülüyor oasisv2.authorized
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

-- Veri çıktısı seçilmemişti

-- tablo yapısı dökülüyor oasisv2.check
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

-- Veri çıktısı seçilmemişti

-- tablo yapısı dökülüyor oasisv2.comment
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

-- Veri çıktısı seçilmemişti

-- tablo yapısı dökülüyor oasisv2.company
CREATE TABLE IF NOT EXISTS `company` (
  `companyid` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(100) NOT NULL,
  PRIMARY KEY (`companyid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Veri çıktısı seçilmemişti

-- tablo yapısı dökülüyor oasisv2.departman
CREATE TABLE IF NOT EXISTS `departman` (
  `departmanid` int(11) NOT NULL AUTO_INCREMENT,
  `departman` varchar(100) NOT NULL DEFAULT 'test departman',
  PRIMARY KEY (`departmanid`) USING BTREE,
  KEY `departman` (`departman`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Veri çıktısı seçilmemişti

-- tablo yapısı dökülüyor oasisv2.events
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

-- Veri çıktısı seçilmemişti

-- tablo yapısı dökülüyor oasisv2.home
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

-- Veri çıktısı seçilmemişti

-- tablo yapısı dökülüyor oasisv2.invoice
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

-- Veri çıktısı seçilmemişti

-- tablo yapısı dökülüyor oasisv2.messagebox
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

-- Veri çıktısı seçilmemişti

-- tablo yapısı dökülüyor oasisv2.notice
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

-- Veri çıktısı seçilmemişti

-- tablo yapısı dökülüyor oasisv2.personel
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

-- Veri çıktısı seçilmemişti

-- tablo yapısı dökülüyor oasisv2.process
CREATE TABLE IF NOT EXISTS `process` (
  `processid` int(11) NOT NULL AUTO_INCREMENT,
  `process` varchar(50) NOT NULL,
  PRIMARY KEY (`processid`) USING BTREE,
  KEY `process` (`process`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Veri çıktısı seçilmemişti

-- tablo yapısı dökülüyor oasisv2.region
CREATE TABLE IF NOT EXISTS `region` (
  `regionid` int(11) NOT NULL AUTO_INCREMENT,
  `region` varchar(100) NOT NULL,
  `companyget` int(11) NOT NULL,
  PRIMARY KEY (`regionid`) USING BTREE,
  KEY `companyget` (`companyget`),
  CONSTRAINT `FK_region_company` FOREIGN KEY (`companyget`) REFERENCES `company` (`companyid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Veri çıktısı seçilmemişti

-- tablo yapısı dökülüyor oasisv2.ucretbordro
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

-- Veri çıktısı seçilmemişti

-- tablo yapısı dökülüyor oasisv2.unit
CREATE TABLE IF NOT EXISTS `unit` (
  `unitid` int(11) NOT NULL AUTO_INCREMENT,
  `unit` varchar(100) NOT NULL,
  `regionget` int(11) NOT NULL,
  PRIMARY KEY (`unitid`) USING BTREE,
  KEY `regionget` (`regionget`),
  CONSTRAINT `FK_unit_region` FOREIGN KEY (`regionget`) REFERENCES `region` (`regionid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Veri çıktısı seçilmemişti

-- tablo yapısı dökülüyor oasisv2.users
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

-- Veri çıktısı seçilmemişti

-- tablo yapısı dökülüyor oasisv2.yuklenenbelgeler
CREATE TABLE IF NOT EXISTS `yuklenenbelgeler` (
  `belgeid` int(11) NOT NULL AUTO_INCREMENT,
  `belge` varchar(500) NOT NULL,
  `date` date NOT NULL,
  `Description` varchar(1500) NOT NULL,
  PRIMARY KEY (`belgeid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Veri çıktısı seçilmemişti

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
