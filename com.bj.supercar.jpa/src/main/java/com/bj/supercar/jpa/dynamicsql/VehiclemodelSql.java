package com.bj.supercar.jpa.dynamicsql;

import org.apache.ibatis.jdbc.SQL;
import java.util.*;
/**
 * Description：数据库中 t_vehiclemodel表对应的动态sql语句
 * @author auto
 * @Date 2017-12-10 15:42:58
 * @since JRE 1.6.0_22  or higher
 */
public class VehiclemodelSql {

    /**
    * 根据条件进行删除，返回列表
    */
    public String deleteByCondSql(final String where) {
        return new SQL() {
            {
                DELETE_FROM("t_vehiclemodel");
                    if (!(null == where || where.trim().equals(""))) {
                     WHERE(where);
                }
            }
        }.toString();
    }
    /**
     * 根据条件进行查询，返回列表
     * @param columns 返回的字段，null或空默认返回所有
     * @param where 查询条件，正常拼接 where条件，默认为空
     * @param limit 查询返回数量，如：0,1 默认返回所有
     * @return
     */
    public String getListByCondSql(final String columns,final String where,final  String orderby,final String limit) {
        String limitSql="";
        if(!(null==limit||limit.trim().equals("")))
        {
            limitSql=" limit "+limit;
        }
        String orderbySql="";
        if(!(null==orderby||orderby.trim().equals("")))
        {
        orderbySql=" order by "+orderby;
        }
        return new SQL(){
            {
                if(!(null==columns||columns.trim().equals("")))
                {
                    SELECT(columns);
                }else {
                    SELECT("*");
                }
                FROM("t_vehiclemodel");
                if(!(null==where||where.trim().equals("")))
                {
                     WHERE(where);
                }
            }
        }.toString()+orderbySql+limitSql;
    }
    /**
    * 根据条件进行查询，返回数量
    * @param where 查询条件，正常拼接 where条件，默认为空
    * @return
    */
    public String getCountByCondSql(final String where) {
        return new SQL(){
            {
                SELECT("count(*)");
                FROM("t_vehiclemodel");
                if(!(null==where||where.trim().equals("")))
                {
                     WHERE(where);
                }
            }
        }.toString();
    }

   
}