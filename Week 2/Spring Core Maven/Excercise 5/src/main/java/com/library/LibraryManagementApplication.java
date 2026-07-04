package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        // 1. Boot up the Spring IoC Container using your XML file
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        
        // 2. Ask the container for the fully assembled BookService
        BookService bookService = (BookService) context.getBean("bookService");
        
        // 3. Test it!
        bookService.manageBooks();
    }
}