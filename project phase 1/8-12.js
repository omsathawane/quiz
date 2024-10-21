
const Questions = [{
	q: "1.Hydration: On a hot day, you're playing outside with your friends, and you start feeling thirsty. What would you drink to stay hydrated?",
	a: [{ text: "Water", isCorrect: true },
	{ text: "Soda", isCorrect: false }],r: 1

},
{
	q: "2.Access to Healthcare: Imagine you have a friend who doesn't feel well, but their family doesn't have money to go to the doctor. What do you think your friend should do?",
	a: [{ text: "Encourage your friend to visit a free or low-cost clinic if available.", isCorrect: true, isSelected: false },
	{ text: "Ignore the illness and hope it goes away.", isCorrect: false },
	],r: 1

},
{
	q: "3.Safe Drinking Water: You notice that the water from the tap in your school looks dirty and smells strange. What should you do about it, and why is it important to have clean drinking water?",
	a: [{ text: "Report the issue to a teacher or school staff.", isCorrect: true },
	{ text: " Continue drinking the tap water despite its appearance and smell.", isCorrect: false },
	],r: 1

},
{
	q: "4. Nutritious Food Choice: You're at a birthday party, and there's a choice between pizza and a salad with lots of colorful veggies. Which one would you choose to eat?",
	a: [{ text: "Choose pizza because it's delicious and everyone else is having it", isCorrect: false },
	{ text: "Choose the salad with colorful veggies because it's healthier.", isCorrect: true },
	],r: 1

},
{
	q: "5.Environmental Cleanup: You and your friends see a lot of trash in a nearby park. What do you do?",
	a: [{ text: "Collect some of the trash and ask adults for help with disposal.", isCorrect: true },
	{ text: "Leave the park and do nothing about the trash.", isCorrect: false },
	],r: 1

},
{
	q: "6. You see a classmate being teased and bullied by some older kids on the way home from school. What should you do",
	a: [{ text: "Go and join the older kids in teasing your classmate to fit in", isCorrect: false },
	{ text: "Stand up for your classmate and tell a trusted adult about the situation.", isCorrect: true }],r: 2

},
{
	q: "7. Your friend often comes to school hungry, and they always look tired and sad. What could you do to help your friend??",
	a: [{ text: "Ignore your friend's hunger and tiredness.", isCorrect: false, isSelected: false },
	{ text: "Share your snacks or lunch with your friend, and let a teacher or school counselor know about the situation.", isCorrect: true },
	],r: 2

},
{
	q: "8. Your younger sibling tells you that someone touched them inappropriately and told them not to tell anyone. What should you do?",
	a: [{ text: "Ignore what your sibling told you and go about your day.", isCorrect: false },
	{ text: "Comfort your sibling, reassure them that they did the right thing by telling you, and report the incident to a trusted adult immediately.", isCorrect: true },
	],r: 2

},
{
	q: "9. You find some colorful pills in your friend's bag, and they tell you they got them from someone at school. What should you do?",
	a: [{ text: "Encourage your friend to take the pills.", isCorrect: false },
	{ text: "Refuse the pills and inform a trusted adult about the situation, even if your friend asks you not to.", isCorrect: true },
	],r: 2

},
{
	q: "10. Your class is discussing what movie to watch for movie day, and you have a different opinion from most of your classmates. What would you do?",
	a: [{ text: "Keep your opinion to yourself and go along with what the majority wants.", isCorrect: false },
	{ text: "Respectfully share your movie preference with your classmates and suggest a compromise or alternative option.", isCorrect: true },
	],r: 3

},
{
	q: "11. You have a talent for drawing and want to create a mural on the school wall. What would you do if you want to take part in it?",
	a: [{ text: "Start painting the mural without permission.", isCorrect: false },
	{ text: "Seek permission from the school administration, gather support from interested classmates, and plan the mural project with the school's approval", isCorrect: true },
	],r: 3

},
{
	q: "12. You want to start a club at your school for kids who love reading books. Would you go about forming this club?",
	a: [{ text: "Keep your idea to yourself and not take any action.", isCorrect: false },
	{ text: "Approach your school's teacher or principal, share your idea, and ask for assistance in creating the reading club.", isCorrect: true },
	],r: 3

},
{
	q: "13. You're curious about a famous historical event, but you can't find any information in your school library. What would you do to access the information you need?",
	a: [{ text: " Give up on researching the event since it's not in the school library.", isCorrect: false },
	{ text: "Ask your teacher or librarian for suggestions on other sources or visit a public library or search online for information.", isCorrect: true },
	],r: 3

},
{
	q: "14. Your school is planning a field trip, and you have some ideas about where to go and what activities to do. Would you share your ideas with your classmates and teacher?",
	a: [{ text: "Insist on your ideas without considering others' suggestions.", isCorrect: false },
	{ text: "Encourage open discussion with your classmates and teacher, listen to their ideas, and work together to plan a field trip that incorporates various suggestions.", isCorrect: true },
	],r: 3

},
{
	q: "15. Do you know why you should go to school and recieve education?",
	a: [{ text: "To skip school and have more free time.", isCorrect: false },
	{ text: "To gain knowledge, learn important life skills, and prepare for the future.", isCorrect: true },
	],r: 4

},
{
	q: "16. Imagine one day your school suddenly says you can't come to class anymore. What would you do, and who would you talk to about it?",
	a: [{ text: "Accept the decision and stop attending school.", isCorrect: false },
	{ text: "Talk to your parents or guardians and contact the school administration or authorities to resolve the issue.", isCorrect: true },
	],r: 4

},
{
	q: "17. Do you relax and play regulary?",
	a: [{ text: "No, I should always be studying and working.", isCorrect: false },
	{ text: "Yes, it's important to relax and play to maintain a healthy balance in life.", isCorrect: true },
	],r: 4

},
{
	q: "18. Do you participate in sports or physical activities regularly?",
	a: [{ text: "No, physical activities are not necessary.", isCorrect: false },
	{ text: "Yes, participating in sports or physical activities regularly promotes physical fitness and overall well-being.", isCorrect: true },
	],r: 4

}


]

const answers1 = ["Drink water to stay hydrated because water helps yor body to stay cool and work properly. When it's hot, we sweat, and that makes us lose water. Drinking water helps us stay healthy and not get too hot or tired","They can also visit a local clinic or community health center that provides care regardless of a family's ability to pay. It's important because everyone deserves a chance to get better when they're sick.","You should tell a teacher or a school staff member about the dirty water immediately. They can investigate and make sure the water is safe to drink. Clean drinking water is essential to stay healthy because dirty water can make you sick.",
"Choosing the salad with colorful veggies is a good idea because it has vitamins and nutrients that help your body grow and stay strong. Nutritious food helps you feel better and have more energy.",
"You should tell a hygiene worker about it so they can clean it up. It's important to keep public places clean and safe because we all use these places, and nobody wants to get hurt.","You would go and find an adult, like a teacher or a parent, and tell them what you saw. It's important to help because nobody should be hurt or bullied, and adults can make sure it stops and that the classmate is safe.","You could talk to a teacher or a school counselor about my friend. It's important to help them because they might not be getting enough food and care at home, and everyone deserves to be safe, healthy, and happy","You would tell my parents or another trusted adult about it right away. It's important to take action because it's not okay for anyone to hurt or touch someone in a way that makes them uncomfortable. Adults can help stop this and keep us safe.","You would tell your parents or a school teacher about it. It's important to do something because those pills could be dangerous, and it's not safe to take drugs that aren't prescribed by a doctor. We need to protect ourselves and our friends from harm.","You should share share opinion with your classmates because it's okay to have different ideas. It's important because everyone's opinion matters, and it helps us make decisions that everyone can enjoy.","You should talk to your art teacher and the school principal to get permission to create the mural. It's important to express your creativity because it allows you to share your ideas and make our school more beautiful.","You should talk to your teacher and ask for their help to start the reading club. It's important to have the freedom to join clubs because they allow us to meet friends who share our interests and learn new things together.","You should ask your librarian for help finding books or using the internet to learn more about the historical event. It's important to have access to information because it helps us learn and understand the world around us.","You should talk to your classmates and teachers during a class meeting or by writing down your ideas and giving it to them. It's important to be part of the decision-making process because it means our voices are heard, and we can make choices that are fair and enjoyable for everyone.","The right to education means that every child has the opportunity to go to school and learn. It's important because education helps children gain knowledge and skills that can lead to a better future.",];
const answers2 = ["You should tell your parents or a teacher because you know you have the right to go to school, and they can help you figure out what's happening.","It's important for children to relax and play because it helps them de-stress, be creative, and build important life skills. Parents and caregivers can support this right by providing a safe and fun environment for play and allowing time for relaxation.","A child's development includes emotional growth (understanding and managing feelings), mental development (learning, problem-solving), and physical development (health and strength). Nurturing all these aspects is important because it helps children become well-rounded and capable individuals who can navigate life's challenges."];

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
	if(currQuestion<=14)
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
	document.getElementById("text").innerHTML = answers2[currQuestion-15];

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
