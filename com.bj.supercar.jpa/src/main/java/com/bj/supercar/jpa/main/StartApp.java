package com.bj.supercar.jpa.main;
import com.bj.supercar.jpa.JpaConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;

/**
 * ClassName：StartApp
 * @author auto
 * @Date 2017-12-10 15:42:58
 * @since JRE 1.6.0_22  or higher
 */
@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan(value = { "com.bj.supercar.jpa"})
@Import(value = {JpaConfig.class})
public class StartApp  {
    public static void main(String[] args) {
         SpringApplication.run(StartApp.class, args);
    }
}