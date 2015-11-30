function Result()                                                                                          	
{                                                                                                          	
																											
	var ResultTaskOne = 0;                                                                                	
	var ResultTaskTwo = 0;                                                                                	
	var	ResultTaskThree = 0;                                                                              	
	var ResultTaskFour = 0;                                                                               	
	var ResultTaskFive = 0;                                                                               	
	var TotalResult = 0;                                                                                   	
	var PercentageOfReadiness = 0;                                                                        	
	var i;                                                                                                 	
																											
	if (testform.task1.value == "a")                                                                   	
	{                                                                                                      	
		ResultTaskOne += 1;                                                                               	
	}                                                                                                      	
																											
	if (testform.task2.value == "ol")                                                                      	
	{                                                                                                      	
		ResultTaskTwo += 1;                                                                               	
	}                                                                                                      	
																											
	if (testform.task3.value == "meta /")                                                                  	
	{                                                                                                      	
		ResultTaskThree += 1;                                                                             	
	}                                                                                                      	
																											
	for(i = 0; i < 4; i++)                                                                                 	
	{                                                                                                      	
		if (testform.task4[i].checked)                                                                     	
		{                                                                                                  	
			if (testform.task4[i].value == "td" || testform.task4[i].value == "col /")                  	
			{                                                                                              	
				ResultTaskFour += 1;                                                                      	
			}                                                                                              	
			else                                                                                           	
			{                                                                                              	
				ResultTaskFour -= 0.5;                                                                    	
			}                                                                                              	
		}                                                                                                  	
	}                                                                                                      	
	if (ResultTaskFour < 0)                                                                               	
	{                                                                                                      	
		ResultTaskFour = 0;                                                                               	
	}                                                                                                      	
																											
	for(i = 0; i < 4; i++)                                                                                 	
	{                                                                                                      	
		if (testform.task5[i].checked)                                                                     	
		{                                                                                                  	
			if (testform.task5[i].value == "autocomplete" || testform.task5[i].value == "action")          	
			{                                                                                              	
				ResultTaskFive += 1;                                                                      	
			}                                                                                              	
			else                                                                                           	
			{                                                                                              	
				ResultTaskFive -= 0.5;                                                                    	
			}                                                                                              	
		}                                                                                                  	
	}                                                                                                      	
	if (ResultTaskFive < 0)                                                                               	
	{                                                                                                      	
		ResultTaskFive = 0;                                                                               	
	}                                                                                                      	
																											
	TotalResult = ResultTaskOne + ResultTaskTwo + ResultTaskThree + ResultTaskFour + ResultTaskFive;  	
	PercentageOfReadiness = ((TotalResult * 100) / 7).toFixed(2);                                         	
																											
	alert(	"Результат теста:" 			  +                                                                	
			"\n 1-й вопрос — " 			  + ResultTaskOne 		   + " (1)" +                              	
			"\n 2-й вопрос — " 			  + ResultTaskTwo 		   + " (1)" +                              	
			"\n 3-й вопрос — " 			  + ResultTaskThree 	   + " (1)" +                              	
			"\n 4-й вопрос — " 			  + ResultTaskFour 	   + " (2)" +                              	
			"\n 5-й вопрос — " 			  + ResultTaskFive 	   + " (2)" +                              	
			"\n"						  +                                                                	
			"\n Общий результат — " 	  + TotalResult 		   + " (7)" +                              	
			"\n"						  +                                                                	
			"\n The percentage if readiness: " + PercentageOfReadiness + "%");                           	
}                                                                                                          	
////////////////////////////////////////////////////////////////////////////////////////////////////////////
