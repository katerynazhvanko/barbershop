const reviews = [
  {
    id: 1,
    userName: "Ezequiel Doyle",
    nickName: "@ezequieldoyle",
    userReview:
      "I loved how I look with my new hairstyle! It was my first time to experience their service. I was satisfied because he would be able to cut my hair that I wish to have. He also applied something that smoothened my hair and the fragrance was really good. I liked it so much! The pricing was affordable!",
  },
  {
    id: 2,
    userName: "Kelsey Spencer",
    nickName: "@kelseyspencer",
    userReview:
      "Great barber shop. Walked in and they took me immediately without an appointment. Quick haircut, great service and reasonable price. Michaele will get you looking right.",
  },
  {
    id: 3,
    userName: "Marco Parsons",
    nickName: "@marcoparsons",
    userReview:
      "Best barbershop in Forks hands down. You can’t beat the price and level of service from Alan & Michaele! Both give phenomenal cuts and I can’t recommend this shop enough.",
  },
  {
    id: 4,
    userName: "Cristobal Reilly",
    nickName: "@cristobalreilly",
    userReview:
      "Super easy to book online. I didn’t have to wait at all when I got to the barbershop. The hairdresser was friendly, efficient, and skilled — I got a great haircut! Lower priced than anything else in Forks. Highly recommend Barbershop!",
  },
  {
    id: 5,
    userName: "Jim Vargas",
    nickName: "@jimvargas",
    userReview:
      "I’ve never been in the same barbershop until I came to this place. They are consistent and very talented in what they do. Highly recommended.",
  },
  {
    id: 6,
    userName: "Francisco Patrick",
    nickName: "@franciscopatrick",
    userReview:
      "I have definitely found my new go-to barbershop. I was totally shocked by their affordable offered services. Despite their affordable rate, they still provided their fellow customers a high-quality haircut. I am very grateful that I came to this place for my hair. The best of the best place to come for any hairstyle dreams.",
  },
  {
    id: 7,
    userName: "Marlin Kaiser",
    nickName: "@marlinkaiser",
    userReview:
      "Barber was friendly and professional. He asked me what kind of hairstyle I want/used to have and he gave me his input on what he thinks would look good with my head shape. I made the final decision after hearing his opinion and I am satisfied with the outcome. It’s different than what I’m used to, but in a good way!",
  },
  {
    id: 8,
    userName: "Boyce King",
    nickName: "@boyceking",
    userReview:
      "Great guys been here already couple of times and very satisfied with the haircut and they do offer a punch card which’s get 9 haircut and 10 one would be free can’t get any better then this.",
  },
  {
    id: 9,
    userName: "Boyce King",
    nickName: "@boyceking",
    userReview:
      "Had my hair cut after booking an appointment online today. Looks great, the barbers were friendly, and I was in and out in 20 minutes. I’ll be returning.",
  },
  {
    id: 10,
    userName: "Roland Blackburn",
    nickName: "@rolandblackburn",
    userReview:
      "Best haircut I have ever gotten! I have been coming here for a couple years and always get consistently great results. I did not know what I was missing out on before I started coming here.",
  },
  {
    id: 11,
    userName: "Jared Rowe",
    nickName: "@jaredrowe",
    userReview:
      "My barber of many years left the city so had to find a new one. Looked at many places but they were too expensive. This was the best price and quality. Don’t hesitate to get a haircut right now!",
  },
  {
    id: 12,
    userName: "Randal Rollins",
    nickName: "@randalrollins",
    userReview:
      "Great place. John and Machele are super nice guys! Been here too many place, it’s quick, but most importantly it’s good. 100% recommended. Cheers guys",
  },
  {
    id: 12,
    userName: "Randal Rollins",
    nickName: "@randalrollins",
    userReview:
      "Great place. John and Machele are super nice guys! Been here too many place, it’s quick, but most importantly it’s good. 100% recommended. Cheers guys",
  },
  {
    id: 13,
    userName: "Dirk Preston",
    nickName: "@dirkpreston",
    userReview:
      "First time customer, but definitely won’t be my last. Alan was really professional and gave me great tips on how to get rid of my cowlick. The haircut looks great, and my wife said it was the best haircut I’ve ever got before I told her I went to a new place. Cant recommend these guys enough.",
  },
  {
    id: 14,
    userName: "Alejandro Mclaughlin",
    nickName: "@alejandromclaughlin",
    userReview:
      "This is my go-to barbershop 💈 Good prices. The barbers are pleasant and friendly. They always give me a great haircut. I won’t go anywhere else now! Definitely recommend this place!",
  },
  {
    id: 15,
    userName: "Dorian Cannon",
    nickName: "@doriancannon",
    userReview:
      "This is the best barbershop in the area. I have been to other barbershops nearby and none compare to this one. Great quality haircuts, pricing is unbeatable, and the staff is always friendly and attentive to each person. I highly recommend everyone to come and give this place a try!",
  },
  {
    id: 16,
    userName: "Eli Mclean",
    nickName: "@elimclean",
    userReview:
      "I totally recommend this barbershop to all of you! They have the best customer service and their job is phenomenal. They pay close attention to detail, and the prices are great! I want to thank the store manager and the hairstylist for doing a wonderful job!",
  },
  {
    id: 17,
    userName: "Homer Brennan",
    nickName: "@homerbrennan",
    userReview:
      "Perfect haircut! Hot towel massage therapy after a smooth shave was phenomenal! Was left refreshed and rejuvenated! Can’t wait to do it again!",
  },
  {
    id: 18,
    userName: "Thanh Anderson",
    nickName: "@thanhanderson",
    userReview:
      "Been going here since I moved to the area and it’s consistently a high quality experience. I’m always happy with the haircut. Team is very friendly and personable and the prices are affordable! Would highly recommend!",
  },
  {
    id: 19,
    userName: "Fredric Clay",
    nickName: "@fredricclay",
    userReview:
      "Highly recommend these guys. They are my go-to barbershop. Excellent attention to detail and I always leave happy and looking much better than before. Definitely definitely head here when you need a cut or just to get cleaned up.",
  },
  {
    id: 20,
    userName: "Irvin Potts",
    nickName: "@irvinpotts",
    userReview:
      "John is the best barber I’ve had in over 20 years of getting my haircut as an adult. The best hot shave and full service a guy can ask for. Highly recommend this becomes.",
  },
  {
    id: 21,
    userName: "Jean Goodwin",
    nickName: "@jeangoodwin",
    userReview:
      "This is by far my favorite barber shop in the city. They have the best barbers and just moved into a larger space. I am more pleased with the haircut after each visit. I highly recommend this Barbershop to anyone looking for a great cut for great value.",
  },
  {
    id: 22,
    userName: "Valentin Luna",
    nickName: "@valentinluna",
    userReview:
      "I've had the privilege of experiencing the exceptional services provided by Barbershop firsthand. And let me tell you, it's an experience like no other. From the moment you step foot inside their doors, you're greeted with a warm and friendly atmosphere that instantly puts you at ease. The skilled barbers at Barbershop are experts in their craft, wielding their scissors and razors with the precision of a surgeon.Let's dive into the services that Barbershop offers. Starting with men's haircuts, you can expect nothing but the best. Whether you're looking to freshen up your current style or try something new, the barbers at Barbershop have an innate ability to understand your vision and transform it into reality. From classic cuts to modern hairstyles, they have the expertise to deliver exactly what you're looking for.",
  },
  {
    id: 23,
    userName: "Walker Hardin",
    nickName: "@walkerhardin",
    userReview:
      "I've had the privilege of experiencing the exceptional services provided by Barbershop firsthand. And let me tell you, it's an experience like no other. From the moment you step foot inside their doors, you're greeted with a warm and friendly atmosphere that instantly puts you at ease. The skilled barbers at Barbershop are experts in their craft, wielding their scissors and razors with the precision of a surgeon.Let's dive into the services that Barbershop offers. Starting with men's haircuts, you can expect nothing but the best. Whether you're looking to freshen up your current style or try something new, the barbers at Barbershop have an innate ability to understand your vision and transform it into reality. From classic cuts to modern hairstyles, they have the expertise to deliver exactly what you're looking for.",
  },
  {
    id: 24,
    userName: "Sammy Calderon",
    nickName: "@sammycalderon",
    userReview:
      "A Masterpiece for Men's Grooming NeedsIf you're a man who takes pride in his appearance and seeks professional grooming services, then Barbershop is the perfect destination for you. Whether you're looking for a classic tailored cut or a trendy style, the skilled barbers at Barbershop possess the expertise to bring your vision to life. Their attention to detail and precision ensures that you'll leave the chair with a haircut that is both stylish and suiting to your personality.For those who sport beards, Barbershop offers exceptional beard trims and mustache trims. With their deft hands and keen eye, the barbers sculpt and shape your facial hair, creating a polished and well-groomed appearance. Even if you require a clean shave, Barbershop masters the art of the straight razor shave, providing a smooth and impeccable finish.Barbershop recognizes that grooming is not exclusive to adults. They further extend their services to cater to younger generations.",
  },
];
