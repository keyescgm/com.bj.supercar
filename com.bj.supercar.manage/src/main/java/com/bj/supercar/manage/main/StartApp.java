package com.bj.supercar.manage.main;
import com.bj.supercar.manage.JpaConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;

/**
 * ClassName：StartApp
 * @author auto
 * @Date 2017-12-04 23:43:29
 * @since JRE 1.6.0_22  or higher
 */
@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan(value = {"com.bj.supercar.manage"})
@Import(value = {JpaConfig.class})
public class StartApp  {
    public static void main(String[] args) {
         SpringApplication.run(StartApp.class, args);
    }
}