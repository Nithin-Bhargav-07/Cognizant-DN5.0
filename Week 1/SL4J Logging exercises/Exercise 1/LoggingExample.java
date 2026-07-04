package com.sample;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

 // Step 1: Create a logger object for this class
 
 private static final Logger logger =
         LoggerFactory.getLogger(LoggingExample.class);

 public static void main(String[] args) {
     logger.error("This is an error message");
     logger.warn("This is a warning message");

     // (Optional understanding)
     // logger.info("This is an info message");   // general information
     // logger.debug("This is a debug message");   // debugging details

 }
}