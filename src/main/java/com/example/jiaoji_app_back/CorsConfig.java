//package com.example.jiaoji_app_back;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
///**
// * AJAX请求跨域
// *
// * @author DongD
// * @time 2021-05-13
// */
//
//@Configuration
//public class CorsConfig implements WebMvcConfigurer {
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
////        registry.addMapping("/**")
//////                .allowedOrigins("*")
////                .allowedOriginPatterns("*")
////                .allowedMethods("GET", "HEAD", "POST", "PUT", "DELETE")
////                .allowedHeaders("*")
////                .allowCredentials(true)
////                .maxAge(3600);
//        registry.addMapping("http://localhost:3000/**")
//                //是否发送Cookie
//                .allowCredentials(true)
//                //设置放行哪些原始域   SpringBoot2.4.4下低版本使用.allowedOrigins("*")
////                .allowedOriginPatterns("*")
//                .allowedOrigins("http://localhost:3000")
//                //放行哪些请求方式
//                .allowedMethods(new String[]{"GET", "POST", "PUT", "DELETE"})
//                //.allowedMethods("*") //或者放行全部
//                //放行哪些原始请求头部信息
//                .allowedHeaders("*")
//                //暴露哪些原始请求头部信息
//                .exposedHeaders("*");
//    }
//}
//
