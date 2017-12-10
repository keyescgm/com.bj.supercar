-- ----------------------------
-- Table structure for t_auth
-- ----------------------------
DROP TABLE IF EXISTS `t_auth`;
CREATE TABLE `t_auth` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `auth_name` varchar(200) NOT NULL COMMENT '权限名称',
  `insert_time` TIMESTAMP NULL COMMENT '录入时间',
  `lastupdate_time` TIMESTAMP NULL COMMENT '修改时间',
  `operator` varchar(50) DEFAULT '' COMMENT '操作人',
  `describ` text  COMMENT '备用描述信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='权限表';

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(200) NOT NULL COMMENT '用户名',
  `auth_ids` varchar(200) NOT NULL COMMENT '权限IDs,多个之间以,隔开',
  `enabled` smallint(2) DEFAULT '1' COMMENT '是否被删除，1：未被删除，0：已删除',
  `insert_time` TIMESTAMP NULL COMMENT '录入时间',
  `lastupdate_time` TIMESTAMP NULL COMMENT '修改时间',
  `operator` varchar(50) DEFAULT '' COMMENT '操作人',
  `describ` text  COMMENT '备用描述信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='用户权限通用表';


-- ----------------------------
-- Table structure for t_brand
-- ----------------------------
DROP TABLE IF EXISTS `t_brand`;
CREATE TABLE `t_brand` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL COMMENT '品牌名称',
  `pic_url` varchar(500) NOT NULL COMMENT '品牌图标地址',
  `enabled` smallint(2) DEFAULT '1' COMMENT '是否被删除，1：未被删除，0：已删除',
  `insert_time` TIMESTAMP NULL COMMENT '录入时间',
  `lastupdate_time` TIMESTAMP NULL COMMENT '修改时间',
  `operator` varchar(50) DEFAULT '' COMMENT '操作人',
  `describ` text  COMMENT '备用描述信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='品牌表';

-- ----------------------------
-- Table structure for t_vehiclemodel
-- ----------------------------
DROP TABLE IF EXISTS `t_vehiclemodel`;
CREATE TABLE `t_vehiclemodel` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL COMMENT '车型名称',
  `pic_url` varchar(500) NOT NULL COMMENT '车型图标地址',
  `enabled` smallint(2) DEFAULT '1' COMMENT '是否被删除，1：未被删除，0：已删除',
  `insert_time` TIMESTAMP NULL COMMENT '录入时间',
  `lastupdate_time` TIMESTAMP NULL COMMENT '修改时间',
  `operator` varchar(50) DEFAULT '' COMMENT '操作人',
  `describ` text  COMMENT '备用描述信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='车型表';

-- ----------------------------
-- Table structure for t_color
-- ----------------------------
DROP TABLE IF EXISTS `t_color`;
CREATE TABLE `t_color` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL COMMENT '颜色名称',
  `pic_url` varchar(500) NOT NULL COMMENT '图标地址',
  `enabled` smallint(2) DEFAULT '1' COMMENT '是否被删除，1：未被删除，0：已删除',
  `insert_time` TIMESTAMP NULL COMMENT '录入时间',
  `lastupdate_time` TIMESTAMP NULL COMMENT '修改时间',
  `operator` varchar(50) DEFAULT '' COMMENT '操作人',
  `describ` text  COMMENT '备用描述信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='颜色表';

-- ----------------------------
-- Table structure for t_province
-- ----------------------------
DROP TABLE IF EXISTS `t_province`;
CREATE TABLE `t_province` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL COMMENT '省份名称',
  `enabled` smallint(2) DEFAULT '1' COMMENT '是否被删除，1：未被删除，0：已删除',
  `insert_time` TIMESTAMP NULL COMMENT '录入时间',
  `lastupdate_time` TIMESTAMP NULL COMMENT '修改时间',
  `operator` varchar(50) DEFAULT '' COMMENT '操作人',
  `describ` text  COMMENT '备用描述信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='省份表';

-- ----------------------------
-- Table structure for t_city
-- ----------------------------
DROP TABLE IF EXISTS `t_city`;
CREATE TABLE `t_city` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `province_id` bigint(20) NOT NULL COMMENT '所属省份名称',
  `name` varchar(200) NOT NULL COMMENT '城市名称',
  `enabled` smallint(2) DEFAULT '1' COMMENT '是否被删除，1：未被删除，0：已删除',
  `insert_time` TIMESTAMP NULL COMMENT '录入时间',
  `lastupdate_time` TIMESTAMP NULL COMMENT '修改时间',
  `operator` varchar(50) DEFAULT '' COMMENT '操作人',
  `describ` text  COMMENT '备用描述信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='城市表';

-- ----------------------------
-- Table structure for t_buycarinfo
-- ----------------------------
DROP TABLE IF EXISTS `t_buycarinfo`;
CREATE TABLE `t_buycarinfo` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL COMMENT '姓名',
  `phone` varchar(20) NOT NULL COMMENT '联系电话',
  `city_id` bigint(20) NOT NULL COMMENT '所属城市名称',
  `car_desc` text NOT NULL COMMENT '描述信息',
  `enabled` smallint(2) DEFAULT '1' COMMENT '是否被删除，1：未被删除，0：已删除',
  `insert_time` TIMESTAMP NULL COMMENT '录入时间',
  `lastupdate_time` TIMESTAMP NULL COMMENT '修改时间',
  `operator` varchar(50) DEFAULT '' COMMENT '操作人',
  `describ` text  COMMENT '备用描述信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='买车信息表';

-- 资讯信息表
-- ----------------------------
-- Table structure for t_infomation
-- ----------------------------
DROP TABLE IF EXISTS `t_infomation`;
CREATE TABLE `t_infomation` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL COMMENT 'title标题',
  `pic_urls` varchar(500) NOT NULL COMMENT '头图信息，多个用分号隔开',
  `content` text NOT NULL COMMENT '主体信息',
  `enabled` smallint(2) DEFAULT '1' COMMENT '是否被删除，1：未被删除，0：已删除',
  `insert_time` TIMESTAMP NULL COMMENT '录入时间',
  `lastupdate_time` TIMESTAMP NULL COMMENT '修改时间',
  `operator` varchar(50) DEFAULT '' COMMENT '操作人',
  `describ` text  COMMENT '备用描述信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='资讯信息表';

-- 车辆信息表
-- ----------------------------
-- Table structure for t_carinfo
-- ----------------------------
DROP TABLE IF EXISTS `t_carinfo`;
CREATE TABLE `t_carinfo` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(500) NOT NULL COMMENT '标题',
  `brand_id` bigint(20) NOT NULL COMMENT '品牌类型id',
  `city_id` bigint(20) NOT NULL COMMENT '所属城市名称',
  `vehiclemodel_id` bigint(20) NOT NULL COMMENT '车型类型id',
  `speed_type` smallint(2) DEFAULT '0' COMMENT '变速箱类型，0：暂无，1：自动，2：手动，3：自动手动都有',
  `drive_type` smallint(2) DEFAULT '0' COMMENT '驱动类型，0：暂无，1：一驱，2：二驱，3：三驱，4：四驱',
  `displacement` float  NULL COMMENT '排量 单位T',
  `disp_type` smallint(2) DEFAULT '1' COMMENT '排放标准，0：暂无，1：国一，2：国二，3：国三，4：国四，5：国五',
  `color_id` bigint(20) NOT NULL COMMENT '颜色类型id',
  `pic_urls` text NOT NULL COMMENT '车辆图片信息，多个用分号隔开',
  `price` float NOT NULL COMMENT '车辆价格，单位万',
  `content` text NOT NULL COMMENT '详细信息，富文本',
  `enabled` smallint(2) DEFAULT '1' COMMENT '是否被删除，1：未被删除，0：已删除',
  `insert_time` TIMESTAMP NULL COMMENT '录入时间',
  `lastupdate_time` TIMESTAMP NULL COMMENT '修改时间',
  `operator` varchar(50) DEFAULT '' COMMENT '操作人',
  `describ` text  COMMENT '备用描述信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='车辆信息表';

