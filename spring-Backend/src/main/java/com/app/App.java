package com.app;

import com.twilio.Twilio; 
import com.twilio.rest.api.v2010.account.Message; 
import com.twilio.rest.api.v2010.account.MessageCreator; 
import com.twilio.type.PhoneNumber; 
 
import java.math.BigDecimal; 
import java.net.URI; 
import java.util.ArrayList; 
import java.util.List; 
 
public class App { 
    private final static String ACCOUNT_SID = "ACdbd21fc9a2dbe91be5ce890580a3c7ae"; 
    private final static String AUTH_TOKEN = "b665af8ed62a508a19c7cf4e0d24e529"; 
 
    public static void main(String[] args) { 
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN); 
         
        MessageCreator messageCreator = Message.creator( 
            "ACdbd21fc9a2dbe91be5ce890580a3c7ae", 
            new PhoneNumber("+19092571763") 
        ); 
    
         
        Message message = messageCreator.create(); 
        System.out.println(message.getSid()); 
    } 
}