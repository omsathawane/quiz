
const Questions = [{
	q: "1.Imagine your family is going through a difficult time, and you don't have enough food, a proper place to live, or warm clothing during the winter. Do you know if there's something you can do or someone you can talk to about getting help with these basic needs? ",
	a: [{ text: "No, there's nothing I can do, and no one to talk to about getting help.", isCorrect: false },
	{ text: "Yes, there are social services, government agencies, and local organizations I can reach out to for assistance with basic needs.", isCorrect: true }],r: 1

},
{
	q: "2.Have you ever felt like you were treated unfairly or disrespectfully at school or in your community? What do you think living with dignity means, and do you know if there are rules or laws that protect this right?",
	a: [{ text: "No, I don't think there are rules or laws that protect the right to live with dignity.", isCorrect: true, isSelected: false },
	{ text: "Yes, living with dignity means being treated fairly and respectfully. There are rules and laws in place, both at school and in the community, that protect this right.", isCorrect: true },
	],r: 1

},
{
	q: "3.If you found out your drinking water was not safe or you didn't have access to nutritious food, do you know that there are people or organizations you could reach out to for assistance?",
	a: [{ text: "No, I'm not aware of any assistance available for unsafe drinking water or lack of nutritious food.", isCorrect: false },
	{ text: " Yes, there are organizations and resources I can contact for help if I encounter issues with unsafe drinking water or lack of nutritious food.", isCorrect: true },
	],r: 1

},
{
	q: "4. Imagine you discovered an area in your neighborhood that was very polluted and not safe for people to be around. Do you know if there are any organizations or authorities responsible for keeping the environment clean and safe? What would you do if you saw something like that?",
	a: [{ text: "No, I don't know of any organizations responsible for environmental safety.", isCorrect: false },
	{ text: "Yes, there are organizations and authorities responsible for keeping the environment clean and safe. If I saw pollution or unsafe conditions, I would report it to them.", isCorrect: true },
	],r: 1

},
{
	q: "5.In your opinion, what do you think is important for staying healthy and well-informed about your health? Are there any sources of information you trust when it comes to health matters, and do you feel you have easy access to them?",
	a: [{ text: "I don't think staying healthy and well-informed about health matters is important.", isCorrect: false },
	{ text: "Staying healthy is important, and I trust sources like healthcare professionals, reliable websites, and school health programs for information. I feel I have easy access to them.", isCorrect: true },
	],r: 1

},
{
	q: "6. Imagine you witness a friend being bullied both in person and online. What would you do to help your friendt?",
	a: [{ text: "Ignore the situation and not get involved to avoid trouble.", isCorrect: false },
	{ text: "Support my friend by offering comfort, reporting the bullying to a trusted adult, and encouraging my friend to seek help from a teacher or counselor.", isCorrect: true }],r: 2

},
{
	q: "7. You notice that a classmate always seems hungry, and their clothes are often dirty and torn. What actions could you take to help them?",
	a: [{ text: "Ignore their situation and not take any action.", isCorrect: false, isSelected: false },
	{ text: "Show empathy, talk to a teacher or school counselor about their situation, and consider donating clothing or food to help them discreetly.", isCorrect: true },
	],r: 2

},
{
	q: "8. Your friend confides in you that they've experienced inappropriate touching from someone they know but are scared to report it. What would you advise your friend to do?",
	a: [{ text: "Tell your friend to keep it a secret to avoid trouble.", isCorrect: false },
	{ text: "Encourage your friend to confide in a trusted adult, like a parent, teacher, or school counselor, and explain that it's essential to report such incidents to keep everyone safe.", isCorrect: true },
	],r: 2

},
{
	q: "9. You find out that a friend has been experimenting with drugs like marijuana or prescription pills. How would you approach this situation to help your friend?",
	a: [{ text: "Join in and experiment with drugs together to fit in.", isCorrect: false },
	{ text: "Express concern for your friend's safety and well-being, talk to them about the risks of drug use, and encourage them to seek help from a trusted adult or counselor to address the issue.", isCorrect: true },
	],r: 2

},
{
	q: "10. You're in a classroom debate, and most of your classmates have one opinion, but you disagree. Would you speak your mind?",
	a: [{ text: "No, I would keep my opinion to myself to avoid conflict.", isCorrect: false },
	{ text: "Yes, I would respectfully express my opinion and provide reasons for it during the debate.", isCorrect: true },
	],r: 3

},
{
	q: "11. You want to create an art piece or write a story expressing your thoughts on an important issue, but some people might disagree with you. How would you approach this?",
	a: [{ text: "Avoid creating the art piece or writing to prevent disagreement.", isCorrect: false },
	{ text: "Create the art piece or write the story while respecting diverse opinions and being open to constructive criticism.", isCorrect: true },
	],r: 3

},
{
	q: "12. You're interested in joining a club or organization at school, but some of your friends are not interested. What would you do?",
	a: [{ text: "Give up on joining the club to avoid differences with friends.", isCorrect: false },
	{ text: " Pursue the club of interest independently, while maintaining friendships with those who have different interests.", isCorrect: true},
	],r: 3

},
{
	q: "13. You come across a controversial topic in the news, and different sources provide conflicting information. How would you approach this situation?",
	a: [{ text: " Believe one source and ignore conflicting information.", isCorrect: false },
	{ text: "Compare multiple sources, critically evaluate their credibility, and seek a balanced understanding of the issue.", isCorrect: true },
	],r: 3

},
{
	q: "14. Your school is making decisions about extracurricular activities for the next semester. How would you ensure your voice is heard?",
	a: [{ text: "Stay silent and hope others will represent my views.", isCorrect: false },
	{ text: "Participate actively in school meetings, share my ideas, and collaborate with others to ensure my voice is heard.", isCorrect: true },
	],r: 3

},
{
	q: "15. Imagine your school suddenly told you that you couldn't attend classes anymore. What do you think you could do in this situation?",
	a: [{ text: "Accept the decision and stop pursuing education.", isCorrect: false },
	{ text: "Seek guidance from parents, guardians, or authorities, and explore alternative education options such as homeschooling or online schooling.", isCorrect: true },
	],r: 4

},
{
	q: "16. If you had a strong interest in a subject that wasn't taught at your school, do you know if there are ways you could still learn about it?",
	a: [{ text: "Give up on learning about the subject since it's not taught at school.", isCorrect: false },
	{ text: " Explore online courses, books, or community resources related to the subject to continue learning independently.", isCorrect: true },
	],r: 4

},
{
	q: "17. Think about your daily routine. Do you feel like you have enough time to relax and play after school and on weekends?",
	a: [{ text: "No, I don't have any time for relaxation and play in my daily routine.", isCorrect: false },
	{ text: "Yes, I make sure to allocate time for relaxation and play after school and on weekends to maintain a balanced routine.", isCorrect: true },
	],r: 4

},
{
	q: "18. Do you ensure you have time for mental and physical development, such as sports or hobbies?",
	a: [{ text: " No, I don't prioritize mental and physical development in my daily life.", isCorrect: false },
	{ text: "Yes, I actively engage in sports, hobbies, and activities to promote both mental and physical well-being.", isCorrect: true },
	],r: 4

}


]

const answers1 = ["Yes, there are organizations, government agencies, and charities that can provide support to families facing economic hardship. In some countries, there are social safety nets and welfare programs that offer assistance with basic needs","Living with dignity means being treated with respect and fairness. If you felt you was being treated unfairly, you should talk to a teacher, school counselor, or my parents. You think there are anti-discrimination laws that protect us from unfair treatment","If someone in your family got sick, you should go to the doctor or hospital. And if your water wasn't safe, you should report it to the local authorities. There are food banks and programs that help people who can't afford nutritious food.","You should take pictures of the polluted area and tell your parents about it. They could contact the city or environmental agencies to clean it up. It's important to keep your environment clean","To stay healthy, You should rely on your school nurse, family doctor and trusted websites for health information. You can also ask your parents or teachers if I have questions about my health.","You should talk to your friend and offer support. Then, you should inform a trusted adult or teacher about the bullying. It's important to help because nobody should suffer from bullying or any kind of violence, and adults can intervene to stop it.","You should talk to a teacher or school counselor about your concerns regarding your classmate. It's important to help because neglect can harm a child's well-being, and everyone deserves to be safe, healthy, and cared for.","You should tell your friend to talk to a trusted adult, like a parent or teacher, about what happened. It's important to take action because physical and sexual abuse can be harmful, and it's crucial to ensure your friend's safety and well-being.","You should talk to your friend, express your concern for their well-being, and strongly advise them to stop using drugs. Then, you should encourage them to talk to a trusted adult or counselor for support. It's important to intervene because drugs can have severe consequences on a person's health and future, and you should help your friends make safer choices.","You should express your own opinion respectfully and listen to your classmates' viewpoints. It's important because everyone has the right to their own opinions, and healthy discussions help us understand different perspectives."];
const answers2 = ["You should create your art piece or story because freedom of expression allows me to share your thoughts and feelings. It's important because it helps your express ourselves and encourages open dialogue, even when people have different views.","You should join the club if it interests you, even if your friends aren't into it. It's important to have the freedom to choose your associations because it allows us to explore our interests, make new friends, and learn from different experiences.","You should research from multiple sources, including reputable news outlets, to get a well-rounded view of the topic. The right to information is important because it helps us make informed decisions and understand the world better.","You should attend school meetings or join student council to have a say in the decisions. It's important to participate because it means your opinions matter, and it helps create a fair and enjoyable school environment.","If your school suddenly told you that you couldn't attend classes, then you should talk to talk parents first. They could contact the school or find out what's happening. You should know that kids have the right to go to school, and there are laws that protect that right.","If there's something You really want to learn that's not taught at school, you might look for online courses or books about it. There are also clubs and extracurricular activities where you can explore my interests.","Having time to relax and play is crucial. After school, you should sure to set aside time for hobbies, hanging out with friends, and just unwinding. It helps reduce stress and keeps me happy.","For emotional development, You should talk to your friends and family about how you are feeling, and sometimes you should write in a journal. Mentally, you should challenge yourself with puzzles and read books. And for physical development, you should play sports and try to eat healthy."];

let currQuestion = 0;

let optionNumber = 0;

let correctAns = 0;

function loadQues() {
	const question = document.getElementById("ques")

	question.textContent = Questions[currQuestion].q;
	

		document.getElementById("opt1").value = Questions[currQuestion].a[0].text;
        document.getElementById("opt2").value = Questions[currQuestion].a[1].text;
        document.getElementById("opt3").value = Questions[currQuestion].a[2].text;
        document.getElementById("opt4").value = Questions[currQuestion].a[3].text;

	
}

loadQues();




function nextQuestion() 
{
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} 
    
}
   

function checkAns()
{
	if(currQuestion<=9)
	{
	document.getElementById("answers").style.display = "block";
	document.getElementById("text").innerHTML = answers1[currQuestion];

	switch(Questions[currQuestion].r)
	{
		case 1:
			document.getElementById("right").innerHTML = "Right to Health";
			break;
		case 2:
			document.getElementById("right").innerHTML = "Right to Protection";
     		break;	
		case 3:
			document.getElementById("right").innerHTML = "Right to Freedom";
			break;
		case 4:
			document.getElementById("right").innerHTML = "Right to Development";
			break;

	}
	if (Questions[currQuestion].a[optionNumber].isCorrect) {
		
		document.getElementById("right_wrong").innerHTML = "Correct Answer";
		document.getElementById("right_wrong").style.color = "green";
		
		
	} 
	else
	{
		document.getElementById("right_wrong").innerHTML = "Oh!, incorrect";
		document.getElementById("right_wrong").style.color = "orange";
		
	}
}
else 
{
	document.getElementById("answers").style.display = "block";
	document.getElementById("text").innerHTML = answers2[currQuestion-10];

	switch(Questions[currQuestion].r)
	{
		case 1:
			document.getElementById("right").innerHTML = "Right to Health";
			break;
		case 2:
			document.getElementById("right").innerHTML = "Right to Protection";
     		break;	
		case 3:
			document.getElementById("right").innerHTML = "Right to Freedom";
			break;
		case 4:
			document.getElementById("right").innerHTML = "Right to Development";
			break;

	}
	if (Questions[currQuestion].a[optionNumber].isCorrect) {
		
		document.getElementById("right_wrong").innerHTML = "Correct Answer";
		document.getElementById("right_wrong").style.color = "green";
		
		
	} 
	else
	{
		document.getElementById("right_wrong").innerHTML = "Oh!, incorrect";
		document.getElementById("right_wrong").style.color = "orange";
		
	}
}
}
function prevQuestion()
{
    if (currQuestion <= Questions.length - 1) {
		currQuestion--;
		loadQues();
	} 
}
function offClick()
{
	document.getElementById("answers").style.display = "none";
}
function returnOptionNumber(num)
{
   optionNumber = num;
}
