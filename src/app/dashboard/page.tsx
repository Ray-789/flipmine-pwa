'use client';
const originalListings=[
  {
      "website": "Facebook",
      "url": "https://www.facebook.com/marketplace/item/607045782404836/?ref=search&referral_code=null&referral_story_type=post&tracking=browse_serp%3A2dca02ab-03f9-45f9-be67-98f173ac3f8a&__tn__=!%3AD",
      "title": "Hp laptop 1TB Core i3 8th gen",
      "price": "$125$150",
      "details": "Condition\nUsed – good",
      "location": "Sandoval, IL",
      "seller": "https://www.facebook.com/marketplace/profile/100010767072543/?product_id=607045782404836",
      "seller_rating": "N/A",
      "images": [
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/506892463_3042232975946693_2585380948729194956_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=_V9AnqrokFIQ7kNvwGF0iId&_nc_oc=AdkYTn95fx62MJLRJk49gOY1BfLbjIE8DM45PoEmduJ1fXTmheTWpMpJlaT1XsAt730&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=ts2wLGibHCy86JK-rjOFwg&oh=00_AfN4Nro_M_86ifSVYhf2J80lPrGacQ4UhNM1CWyozcxsQQ&oe=685806DB",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/489373987_735349548888227_6871280900062538502_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=7JIkahQ0QQsQ7kNvwEWnNnp&_nc_oc=Adl2Q6ia9FowixTnvm2ctRm9zJQAyZiYwcsI8-zchG4jgrPAB_tKcva5kUt6QhU7t2I&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=ts2wLGibHCy86JK-rjOFwg&oh=00_AfP03jYTcoTGjsab9MZgq20HfI7jiagL5sZQAP_izPidOA&oe=6857E37C",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/489371888_591837136867782_3953028135715678888_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=VWC5oihMgBEQ7kNvwEqeyaX&_nc_oc=AdlEAzxvuk290jTVLTZxIC2HrMG5F85gEfJd-abRreegaxK-rK5_8Nr3E4TjdOWEFhY&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=ts2wLGibHCy86JK-rjOFwg&oh=00_AfMHanyKXkupF5qhZvXKk8v51Hu8Eq1auF1UUgBKfUG57g&oe=6857FA99",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/489372932_3991033907822606_6488365010260807876_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=lVCNIdIt7a4Q7kNvwGGMxok&_nc_oc=AdlJrcsTqMegXAGbAfWQtpIcNQxy68zlKczMFM0VT3EJddJjuoOTg1xgmxa9egsAlqg&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=ts2wLGibHCy86JK-rjOFwg&oh=00_AfPq1PpYTcZUCu3Udj9bV7GhK4rIl0kRhnnLKc6BLE4TdA&oe=6857FCEE",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/508184432_711406438265639_747961587801351903_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=nZo8FG2kL0AQ7kNvwHUxIqr&_nc_oc=AdliLsKU8EWNnn36Zo5VvKb7egC_6p4d0gOg6MDq4_-FLsBkFufoBkPaGu1uB_l3cMM&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=ts2wLGibHCy86JK-rjOFwg&oh=00_AfOoVcO9s4b--lkK0kaTucLc43kNxCQd9fQzw-GGx0sIzA&oe=6857D9EB",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/489373043_818637460602986_1187004970224039879_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=ZgSqsecWmRIQ7kNvwGc4q4C&_nc_oc=Adl-PkfD67kV0-KNDV-VtvQtm93RVGNlWrfI6oTpUXdWJk0Ko2ZUJlrpP2fKEMUJT1o&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=ts2wLGibHCy86JK-rjOFwg&oh=00_AfPXGp0--yGP7AEJIq74p8qijbjeRSi17eRUj8XFGWpA-Q&oe=6857E7E1",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/489372102_1365797565217743_7758163165732227761_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=dRR8zzxqdn8Q7kNvwFMNzdf&_nc_oc=AdmFhRLmMTRUDWYBkLixfbzgy1T0al7g63X74lViKtbENFgsb9LYxY5OwxSwNRt-TcM&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=ts2wLGibHCy86JK-rjOFwg&oh=00_AfMrWDjRzNQniceYKByKt1MU3t-pVM6MQD1X6WsBpmrdcA&oe=6857F3E6"
      ]
  },
  {
      "website": "Facebook",
      "url": "https://www.facebook.com/marketplace/item/3896050464001852/?ref=search&referral_code=null&referral_story_type=post&tracking=browse_serp%3A2dca02ab-03f9-45f9-be67-98f173ac3f8a&__tn__=!%3AD",
      "title": "Asus Gaming Laptop",
      "price": "$500",
      "details": "Condition\nUsed – good\nBrand\nASUS",
      "location": "Taylors, SC",
      "seller": "https://www.facebook.com/marketplace/profile/100002791964454/?product_id=3896050464001852",
      "seller_rating": "N/A",
      "images": [
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/485009898_1339062504004799_3208830824676264259_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=TVqvP0l9YEEQ7kNvwGtpJoF&_nc_oc=AdlFwNcFBFh9xoySkknNMr4S_Sl3qYtWWvX1FURZQq4XUukO6e5CV7PFtBOWwIoKzmI&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=UZTLWFoYXoaQo3MM9QDjGA&oh=00_AfN-g9mo7ZnIOO1dFiJayHg5KDgvrJ8FLCe2yHlD_LwblA&oe=68580794",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/484815552_1015457273780270_1985465547051301607_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=BVBN-UZLWfQQ7kNvwHHhJ6k&_nc_oc=AdmldS7osQlVQqTfoa5PegFC8u5C-l8QUtGpmhfiwcpb1Mjgix7PbGfzOkohVR8LIvM&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=UZTLWFoYXoaQo3MM9QDjGA&oh=00_AfNdhe0SsTFRUSPe99oCn1bJDcXdpAzkTNBeEvd47bAJtA&oe=6858057C",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/484558781_1434298174620812_6656488554626578799_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=Iua0kaMa1r4Q7kNvwEd5pY1&_nc_oc=Adn0dNOeu_ncqPdpkDkiHxXFaRWKH4l2GW_eDDvPB_u0cqmc9LYdPQTU4tv-FbJPSMU&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=UZTLWFoYXoaQo3MM9QDjGA&oh=00_AfOYt07AD43RkMChM2jhzM-T2ya340DRU9RKvTnO7VaXLQ&oe=6857E11B",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/484816309_1847459189403353_2386106150774507165_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=c7s-8oMFn1QQ7kNvwHVwJ8_&_nc_oc=AdmD0uRJjf7vjrm0qeRVbrXvrvziwJwxdw8xXshkxthrq-lGdG1LsgvGXpPL6sgowCU&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=UZTLWFoYXoaQo3MM9QDjGA&oh=00_AfNfIWWg5labFtWTlOGor--5brU3Nl9bGKlzvkkBQM11rQ&oe=6857EF6C",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/484557000_1393043588395561_3831925572848293987_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=b9vAJaYzi_EQ7kNvwHrw7vJ&_nc_oc=Adm3ihmAjJVSYZ-SLlDxkqFViDxn4BEtf0JhGIdu-Od5Bykva8h_uLzMkQxMmyFSbw0&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=UZTLWFoYXoaQo3MM9QDjGA&oh=00_AfMBXzp0hRVjKaQQgmjS4wVG0Jbk7wX2KqeN1WK2Ewdu5Q&oe=6857E9AB",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/484558343_2124780487982587_3929022462596554648_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=qBEzhsPpeNcQ7kNvwFqcHp_&_nc_oc=Adlf-sqHKnFqpjCcgDlQQ_2uBW2X0qsu1qp7qsGmifvriaTdNp6rPSJPAVKuh6ZW6TY&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=UZTLWFoYXoaQo3MM9QDjGA&oh=00_AfN1rqP9EZZaRftqpFmAInvTw1gHPnoA-yTNxXDu_XHXAg&oe=6857E743",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/484534137_1626534748225233_5387212339516884325_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=WnMC7YVIOfEQ7kNvwH9zaE-&_nc_oc=Admoryp3ynIpX_K1N2VUnHFXLE-87KxMb2B3E-Icr4J7E9GTu-h9LfqgyAwoeBkvpJ8&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=UZTLWFoYXoaQo3MM9QDjGA&oh=00_AfPA7r8F2GBrzq3BanyQGXBwLz5V9p5DO1G-YBWYWNCzSQ&oe=6857EA68",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/484722663_1097147405508123_2895565582351335991_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=6_e44Shc8YUQ7kNvwGDG1kB&_nc_oc=AdmNB18PKqHbSjMJ2aQAbSgXhkMImHfATknnzQwyY5uJRE6SwRHtOrkU15np9fmoMtY&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=UZTLWFoYXoaQo3MM9QDjGA&oh=00_AfPsenAi24N9vhAB2WEfSP2YjPCqYjyf1UTBvP4rsoryNA&oe=6857F4A4"
      ]
  },
  {
      "website": "Facebook",
      "url": "https://www.facebook.com/marketplace/item/609561678730386/?ref=search&referral_code=null&referral_story_type=post&tracking=browse_serp%3A2dca02ab-03f9-45f9-be67-98f173ac3f8a&__tn__=!%3AD",
      "title": "Laptop 💻",
      "price": "$100",
      "details": "Condition\nUsed – good",
      "location": "Chicago, IL",
      "seller": "https://www.facebook.com/marketplace/profile/100041830860105/?product_id=609561678730386",
      "seller_rating": "N/A",
      "images": [
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/483261755_529393016428508_1189570238633129575_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=UxQEozpLeNIQ7kNvwFV0d_1&_nc_oc=AdkK4VY3PxzKWuG2oRvsdyv7Uf_ZyZMw8X8BGs66PHtWIesPiq_BJms-YDP1OuTv5CM&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=akDVfWK1RtPQOcPJ6OOd6w&oh=00_AfNVRf1-TnGH33STuKMD_TFxVmcd3CW8rjgJl0BTU0MaNA&oe=6857D86E"
      ]
  },
  {
      "website": "Facebook",
      "url": "https://www.facebook.com/marketplace/item/3153190941517022/?ref=search&referral_code=null&referral_story_type=post&tracking=browse_serp%3A2dca02ab-03f9-45f9-be67-98f173ac3f8a&__tn__=!%3AD",
      "title": "Lenovo Yoga 7i 16\" 2.5K 2-in-1 Laptop, Intel 12700H, 32GB RAM, Intel Arc A370M, 1TB SSD",
      "price": "$800\n  · In stock",
      "details": "Condition\nNew",
      "location": "Cincinnati, OH",
      "seller": "https://www.facebook.com/marketplace/profile/100001292678573/?product_id=3153190941517022",
      "seller_rating": "N/A",
      "images": [
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/473219404_631042485960631_7843717753446518015_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=dJS-c66yh0cQ7kNvwFZ7gja&_nc_oc=Adloalz4EfDjdn0OBmKLBHmiC7nwKpClzlGnV4FnRiXtwMRlw0rjzPYYuSFp35OE68E&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=SFEE1ukvF0NlsH_CKDGI7Q&oh=00_AfPcvewR_fPV1wGL_PsZ4IjSvzUdklJd9zr8mzc3uwbAcA&oe=6857DAC1",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/467658718_1661152531133099_1739679761644811993_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=8tfryJar9RYQ7kNvwFKuWGO&_nc_oc=AdnTGfMQfuLt3vSinisk30vMdir_znkCutuXogvEaNs2ihR0YYFQWEGPlo89EatMn_c&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=SFEE1ukvF0NlsH_CKDGI7Q&oh=00_AfOPYJbpjU0maz1mDJgOrWE-MvhzgEhcoXK5j226nKz75w&oe=68580A59",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/467499814_2282609285455218_1635068066471968024_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=Ao3aw71QDoMQ7kNvwEcqlSc&_nc_oc=Adkh-Y1341IIG952KmxypuCK9PbsTXggJ5i8AcSls5sk-YMtX5VDFT-rX_0cLBhKRpw&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=SFEE1ukvF0NlsH_CKDGI7Q&oh=00_AfM0IOgGTbswZqo5sc2VU9oG9Q-0GfY1UOsgrXRnBHV58A&oe=6857E275"
      ]
  },
  {
      "website": "Facebook",
      "url": "https://www.facebook.com/marketplace/item/1316573623011609/?ref=search&referral_code=null&referral_story_type=post&tracking=browse_serp%3A2dca02ab-03f9-45f9-be67-98f173ac3f8a&__tn__=!%3AD",
      "title": "Lenovo Laptop 14 Inch AMD A6 1080p full hd 4g ram windows 10 pro",
      "price": "$100\n  · In stock",
      "details": "Condition\nUsed – like new\nBrand\nLenovo",
      "location": "New Lenox, IL",
      "seller": "https://www.facebook.com/marketplace/profile/1535237479/?product_id=1316573623011609",
      "seller_rating": "N/A",
      "images": [
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/473207583_1544356316273630_974692756482674259_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=hsIfPHXnu-IQ7kNvwENpm6w&_nc_oc=AdkmIm_QHiuPA0tqXvisZuS6a6cZjVM1ccXXhdtCXN-H5cCdIE5G0REOHUltf1FYYM8&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=q4SeRqJCk9trgEesTU8-TQ&oh=00_AfPXs45crFUU6VQVdXpSQzIoCF81mMYZPzf95b2paSkX_g&oe=68580138",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/473211207_1416138816261647_5927756829713500618_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=L8785kqyKxIQ7kNvwGqHE6A&_nc_oc=AdmJ36iVh3GtQm85zayydkNy3N0qRb7452HJyKqbpipJ4vivTJKIq_ncfvposvMVd50&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=q4SeRqJCk9trgEesTU8-TQ&oh=00_AfNqp22l2QuBY47kSsp_-cGDgsnVY7w67Jtfew3byt64UQ&oe=6857FE4E",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/473207881_1107616597567548_1872334094199943483_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=BO4_IyH0U0QQ7kNvwE-Phtk&_nc_oc=AdnW4awmH4g3GvyxVAdPq5C88DCxDsXSlbuyndPagvgngDPROe8U3crzeBcMWgLM3Ks&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=q4SeRqJCk9trgEesTU8-TQ&oh=00_AfOct-k8nF12yyTa99oUre2vW3F8htYaAdabGywfJYVs1A&oe=6857F1C8",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/473198653_561357163393257_5679427688711057435_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=kIb8J0ryN7kQ7kNvwFV5hNP&_nc_oc=Adlx-KhoYN8ZwFnZorUAnN3frtbpxwqQWGpUrQCZEQ7lTyP0FexLBBOtLQCrx0g_flc&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=q4SeRqJCk9trgEesTU8-TQ&oh=00_AfNHhN7RJSoMCT1OrJzGvUeclVpBCLLQgNxIIfoeeRoCMg&oe=6857DEBF"
      ]
  },
  {
      "website": "Facebook",
      "url": "https://www.facebook.com/marketplace/item/1751661082107947/?ref=search&referral_code=null&referral_story_type=post&tracking=browse_serp%3A2dca02ab-03f9-45f9-be67-98f173ac3f8a&__tn__=!%3AD",
      "title": "New ASUS 14\" FHD Laptop - Intel Processor 4GB RAM 64GB Flash Storage - Windows 11 Home in S Mode",
      "price": "$130\n  · In stock",
      "details": "Condition\nNew\nBrand\nASUS",
      "location": "Louisville, KY",
      "seller": "https://www.facebook.com/marketplace/profile/1331571983/?product_id=1751661082107947",
      "seller_rating": "4.8 out of 5 stars, from one review",
      "images": [
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/474129217_1836400390440621_3586344754132604769_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=ckYaII76QRcQ7kNvwEvDmBj&_nc_oc=AdkR0fjdjuoy8OK_PtSxQO9iRoMIgOigyb04QGAaZzOfdPA9XsLv7n7AFW_nMCl8sFo&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=DVLgLALTMSba9Fk9PUjJYQ&oh=00_AfOFEoOAoSO0Z9xYJo5nc_gstZKpReLqc9Le9vHo4zc3Ag&oe=6857FCD8",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/469544602_932355348394747_3094118508489514591_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=zVL1TMRg660Q7kNvwEsC1pt&_nc_oc=Adl_8qkIGl74ZD5i_NJ9QP4isflPsqfn_z-BD6BRfRnS6Lv06YSPKChQG_VeD9xedl8&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=DVLgLALTMSba9Fk9PUjJYQ&oh=00_AfMIfxR14n3SdRaw-LSaznz48TnnyK-itng2JFE-vHYYvg&oe=685809D4",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/468562473_1620804798848549_4171324896147671688_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=lAqYckS8gaYQ7kNvwFwQ0p9&_nc_oc=AdljxATicOgBfDLCvQccSWm-woskRtP21062D-RQYKCnh7ipNNCJTZpgBe_-Gr9-UsQ&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=DVLgLALTMSba9Fk9PUjJYQ&oh=00_AfP5UBjGPrk5RDxv-iB0xmdbA4Y06r5PcIKlPeoEORUGuQ&oe=68580B41",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/469537960_529649293405722_2010397946562259744_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=tbJQDdWRklQQ7kNvwGxKylT&_nc_oc=Adlyn_f9bGtw4AVZUZ6nVbv3NTlG20BMOfGXru3fc8RJoziJK0jNK66Eo7-sAz9fd84&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=DVLgLALTMSba9Fk9PUjJYQ&oh=00_AfOCRiKQ4ENuGAGvVS15MREGlPq5FnNDwU3i9jxWmaIh8A&oe=6857D8C2",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/469441442_566589222786342_1267233451892566151_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=sijtnrvghycQ7kNvwH4Yyms&_nc_oc=AdnOlCygtdW3JAuQkp-wbpIq5pvCFkFvbskUEiYLCHtO9vR5LzhsQtS8PztZ6U8scsk&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=DVLgLALTMSba9Fk9PUjJYQ&oh=00_AfMZuaIzh_1Rsf7u9gRAloMPBRCaPi3AweV5w531TYjElA&oe=6857F286"
      ]
  },
  {
      "website": "Facebook",
      "url": "https://www.facebook.com/marketplace/item/2158241481347667/?ref=search&referral_code=null&referral_story_type=post&tracking=browse_serp%3A2dca02ab-03f9-45f9-be67-98f173ac3f8a&__tn__=!%3AD",
      "title": "Acer Nitro 5 gaming laptop",
      "price": "$250$500",
      "details": "Condition\nUsed – fair\nBrand\nAcer",
      "location": "N/A",
      "seller": "https://www.facebook.com/marketplace/profile/100000034680846/?product_id=2158241481347667",
      "seller_rating": "5 out of 5 stars, from one review",
      "images": [
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/505502549_1221939626083571_2913541302240648719_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=DZ8lgFHSB9gQ7kNvwFqJ6ZX&_nc_oc=AdndjvNyelII-gCl1llPffLTUBpgz_F5-Hhqr9Fh6MCX1pa1sOyupoL6PzZ8zslM53E&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=Va8_Hoketohdl23FxVn7fQ&oh=00_AfOWqF1x998JnAEeWOaYZroh3GdHuGJzlNabNxARVgselQ&oe=6857DD74",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/507349176_708203431907630_6529654421420036749_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=syuuPRrGU_cQ7kNvwESq9W8&_nc_oc=AdlK3vVCj1tQ7kPwhQQ33GeAXZKJwagO-xZj6U9dAGt_GKmx1Z-Pc22XtYg7COd138o&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=Va8_Hoketohdl23FxVn7fQ&oh=00_AfMdvRJsKMEFRwcPi9qSIeahtaHKtkmk-HB4swmeA6j4Zg&oe=685803D9",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/489372262_732885659269752_3455033191580876599_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=m2Xi1ESPKNMQ7kNvwGOpXsG&_nc_oc=AdnYgUNMvErK9pThRWpNYGNIjJnQn3VEtTUlCT-IDHjS-Pn1SC1Jed1udh9WwewHg0o&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=Va8_Hoketohdl23FxVn7fQ&oh=00_AfMbbZfy7wIfiPxlAV7-60XzUVApr-8ZQqZZZMSHJ_5BUQ&oe=685807C1",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/508113001_2145410082643665_4372053223356453622_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=UmI6dtJg9OEQ7kNvwFUV358&_nc_oc=AdntTyKckPm4MFD4brqdYV_XSiCKUVKe4y03yNdhFSuHnNSBORZ9iEDJg7Oz3VEQgNI&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=Va8_Hoketohdl23FxVn7fQ&oh=00_AfMz45jX2Z53XrknJyo6wlFy6TeBLc9jcOjTPqpkltXH5Q&oe=68580603",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/508354329_741400275235864_1597167878449153604_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=xbHq7JyqYjEQ7kNvwFs8FYh&_nc_oc=AdkL3J2vgwbq1bYL585e6dvu0ud2wJeORFuKDq0wDqWhumveREY543K-Mg3ktnOySCg&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=Va8_Hoketohdl23FxVn7fQ&oh=00_AfNQwfCSd0JcUwdl4Hv6KWVJ_FE23r5omJh1Jzehq7gppA&oe=6857E27F"
      ]
  },
  {
      "website": "Facebook",
      "url": "https://www.facebook.com/marketplace/item/1718978902094271/?ref=search&referral_code=null&referral_story_type=post&tracking=browse_serp%3A2dca02ab-03f9-45f9-be67-98f173ac3f8a&__tn__=!%3AD",
      "title": "PRICE IS $650 - Asus ROG G512LV GAMING Laptop: Core i7-10870H, 32GB, 512GB, RTX 2060 GPU, Win11",
      "price": "$500$750",
      "details": "Condition\nUsed – good",
      "location": "N/A",
      "seller": "https://www.facebook.com/marketplace/profile/100000518093765/?product_id=1718978902094271",
      "seller_rating": "4.8 out of 5 stars, from one review",
      "images": [
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/502903720_708446325214999_2322002308787855820_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=tQF6T36qntAQ7kNvwGF7ox9&_nc_oc=AdnVPQiHynlHEp1mdcHTT6Rjp6tqn4UGJD7bZANeoH9HT7Xq58BOpL9chdP_fRKgjnU&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=3NKLyd3BmNzMa81TIh3iRg&oh=00_AfM6EcEv-PSho-oJ5tEEdkXEWYoZCL_RxHD5yVTR-7AzJg&oe=6857E565",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/503405485_1283036330048769_6136197511648596767_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=Y-0egSP4oEwQ7kNvwGYQyJX&_nc_oc=AdmAcmmF7KBy9TtFZ0XOGH2geuHwnj1S3ElLu5h9vvIsoPsrY-pVaokTAluN7rWWHeY&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=3NKLyd3BmNzMa81TIh3iRg&oh=00_AfMJIpE9RAW5iIPAkjJbhgoL511cEIZQ-BdBirEQVqTZtA&oe=6857E1DF",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/503718127_1436492094175847_4811554742275417377_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=di43peF3pqoQ7kNvwEvQz9M&_nc_oc=AdmzUIVZdMqHRqoRNUd-gRDNJUFPFVQneXWgDLfmuK0eFqnNtTNkQnIyhiLz1pKF9Kw&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=3NKLyd3BmNzMa81TIh3iRg&oh=00_AfMpdF3DhN4kOLv_z7rvu4AcIh97n93tR7MGq-kQe49YSw&oe=6857FB53",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/504294473_1396870454976286_1802842341496775924_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=VWf10ZyyHkQQ7kNvwFg1-iv&_nc_oc=AdnAjfragcqKbbwabrG5W97xCloLdchFdoV_m-Oe_txjC3PA43uoES_vXOsQRZQnx3M&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=3NKLyd3BmNzMa81TIh3iRg&oh=00_AfPyXzr07W5vQ-5hFpqIW_xbl-pZ38T-vgS7beOYEud0wA&oe=6857E147",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/504269402_700682882721684_8850995988552570239_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=wsHdf-S0xDQQ7kNvwHE1ExV&_nc_oc=Adkgib8GtBbB457-w1kniJYIZUn_zXHmgXNajG6CYnZRhLOFvizkxCgI31w23mg5dXA&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=3NKLyd3BmNzMa81TIh3iRg&oh=00_AfOU4P9jbdw56mXS84SB3Tlo9_93ULMXo61DvLrs-oNu5Q&oe=6857EC70",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/503400316_1449987283030688_5267925651815339521_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=bwbBk5wBUDUQ7kNvwHA0-Ch&_nc_oc=Admf_QLpNmDdy_ECBPZy7ZaeVpTjSaCr0QeCdNNpEdnJr1blwNuuA3vNH04pGMoOodU&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=3NKLyd3BmNzMa81TIh3iRg&oh=00_AfOQpkySbBKrmZiK1yVZQNa2VuX3VZ-RUnse0TGbpsduzQ&oe=685800FD",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/503189238_1743957439542896_9179358862097817632_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=nROXaVGaa78Q7kNvwGql2aR&_nc_oc=AdluGKQ8Fz_4BOs289nJEYWj-99TkJi6AsYzG7C2njUQdBC79mqtWz8RbfOHHlk1Jns&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=3NKLyd3BmNzMa81TIh3iRg&oh=00_AfN5luaAViuHq0a6KCMRm-Nbjlg4Jk_JmY9_WerjD8szbQ&oe=6857DA00",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/504096538_721944627154629_6040197226420303709_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=MWcEv4eJZtoQ7kNvwEJJnji&_nc_oc=AdlNkkNSUiYNcmuCev9hHRRKpvyQgMh2iAS02bhscm2v_c2K3apVzVC73eQ5HMJfadw&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=3NKLyd3BmNzMa81TIh3iRg&oh=00_AfNrhpj7JDqlB1g8rbThpbnfCu7lYgXFyD2OYYvJ501bfA&oe=6857E865",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/504318532_1229643008524696_6681808736956012683_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=MB0yOxD_ieYQ7kNvwHubrM4&_nc_oc=Admgm77ephrWDKfSF38egzC9EMdXp1KpgOYaL9T0FIQB66si79uN7JmfX0uKH0clM7o&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=3NKLyd3BmNzMa81TIh3iRg&oh=00_AfMFyb5kWHIvdzLHB6L11iG4IB3Y8Zxuxp8JNvtmHkYImA&oe=68580115"
      ]
  },
  {
      "website": "Facebook",
      "url": "https://www.facebook.com/marketplace/item/319859334543335/?ref=search&referral_code=null&referral_story_type=post&tracking=browse_serp%3A2dca02ab-03f9-45f9-be67-98f173ac3f8a&__tn__=!%3AD",
      "title": "Alienware laptop",
      "price": "$350$400",
      "details": "Condition\nUsed – good",
      "location": "N/A",
      "seller": "https://www.facebook.com/marketplace/profile/100004058379459/?product_id=319859334543335",
      "seller_rating": "N/A",
      "images": [
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/462240293_1080257640775549_6418300824808411573_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=PnUl4IyEK7cQ7kNvwHHKj2u&_nc_oc=AdmWBRvxMFMTv0IoSF-q50F0SdDHsaCTLguHFt0CIkAa4mrU7xNb3xYhxQWH2PUONcI&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=IQXH5DyulN0vI2_1jH6eaA&oh=00_AfOQpvWAxHCCkPNOtmH4C4VIeM38gAtFZQOEtQnBEvmcsA&oe=6857E92A",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/481751588_997883115592697_4862445308078831953_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=18AGkLqink0Q7kNvwF_4whC&_nc_oc=AdlgeiWAYgjhKoNuWAulXiHTxj0MB3VI7qCr-SGUpr9oWxokNIa5qYCFHYbZjRsedew&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=IQXH5DyulN0vI2_1jH6eaA&oh=00_AfOkx9d5uekH3YhrL5enjjYhbDdkWL9YMIT4KK5rQfwzTw&oe=6857EEC7",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/482444163_639190719060342_8680921823640684199_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=gnzjK0KgJmoQ7kNvwH7FQek&_nc_oc=AdncJk6qhWUD0ffppt0HqI_p2VaUejZ_2S_rdJ2CU6CTnIo7Ke3CNy427yNyE7Z9M-U&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=IQXH5DyulN0vI2_1jH6eaA&oh=00_AfMHrNg67fK24EFgybBKPWUGVm3vFqWuK_U0kG01yuaZuA&oe=6857EED1",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/482095239_1007120194807425_2213370523539462690_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=XtzF13pYlH0Q7kNvwGk1qSY&_nc_oc=AdlAt5X4ANl_rmA2KXlX0dyO8Q1KerBBo8nyUrBowG0pHF2zaa8Z4amRExNRvJTifG0&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=IQXH5DyulN0vI2_1jH6eaA&oh=00_AfMNG42NFyrx12s9RI1KVFnMKpmTHwXbTzPiE0DVUZhzzQ&oe=6857FEAA",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/482441895_1086408243254538_9031771034981850248_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=HX605O0LpZkQ7kNvwF6fWsd&_nc_oc=AdlqqViRvuYaFgiK9LWRFinnlB_iqcJPBlD3QWF5SQMcFIkXw3DOLlQzOM5n9aTwXMs&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=IQXH5DyulN0vI2_1jH6eaA&oh=00_AfO5sLm4viD8eFIZvARXLSTv0SmVNCLuX2B-fGoCKJdthw&oe=6857F23D"
      ]
  },
  {
      "website": "Facebook",
      "url": "https://www.facebook.com/marketplace/item/3432745956856583/?ref=search&referral_code=null&referral_story_type=post&tracking=browse_serp%3A2dca02ab-03f9-45f9-be67-98f173ac3f8a&__tn__=!%3AD",
      "title": "MacBook Air (Retina, 13-inch, 2020 – Intel)",
      "price": "$370",
      "details": "Condition\nUsed – good",
      "location": "Covington, KY",
      "seller": "https://www.facebook.com/marketplace/profile/100009822007520/?product_id=3432745956856583",
      "seller_rating": "N/A",
      "images": [
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/489912937_1193202345868391_5153135265623169513_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=l5Cu1QP0lf4Q7kNvwGfOKK-&_nc_oc=Adl6AhumbLeMtL6TWLMRxq6emjjZJ64zf1Jjfqd9koeNgF6By4R5aVM0KpeIkNC3GWc&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=4kbPpQJqdmwwT5FWLfRBSQ&oh=00_AfMuQU_W0_DSujKYeHKtoLBZjDwXsYmfqP8OII6jzl1WFQ&oe=68580A2B",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/489367740_1359686458572366_2032213151117548865_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=8JGscnIxYzYQ7kNvwEnMTXb&_nc_oc=Adkcgxu8s7L0ydCCXLrMDDMn11TxNhJkket9edVtp42gm_dn10C3Qudb24S2tep4DmA&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=4kbPpQJqdmwwT5FWLfRBSQ&oh=00_AfNxRHPAZNydU2P-fyYzt7YGoydq3m81c84AxXYb2DYtZw&oe=6857F2A0",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/489407555_1646276552666733_458341604842948566_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=8jrieEBeZ8gQ7kNvwGQR2uo&_nc_oc=AdlXYgxeGh7qQDp1dZRHSTGusUcjnlIMtZ6tnZTEcD7lAPcTber0q5T3NjaE7DDFQMI&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=4kbPpQJqdmwwT5FWLfRBSQ&oh=00_AfNiNHYNl4k-ZziPuNZcMwYhWWem9wV6YUFt-V9SVntLKQ&oe=6857F0FF"
      ]
  },
  {
      "website": "Facebook",
      "url": "https://www.facebook.com/marketplace/item/2202817216747647/?ref=search&referral_code=null&referral_story_type=post&tracking=browse_serp%3A2dca02ab-03f9-45f9-be67-98f173ac3f8a&__tn__=!%3AD",
      "title": "Laptop In Stock",
      "price": "$149\n  · In stock",
      "details": "Condition\nUsed – like new",
      "location": "Greensboro, NC",
      "seller": "https://www.facebook.com/marketplace/profile/569006594/?product_id=2202817216747647",
      "seller_rating": "3.7 out of 5 stars, from one review",
      "images": [
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/452325877_1161899565261821_3566032597714467771_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=o4cE6HH-6zEQ7kNvwGfzjiU&_nc_oc=AdldYpHE7WudPKzSbsbuGPORBitwellsjHDyMWc2LWPVoiXdY2LmQNFnRLD4umFe_Ls&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=6wg0cuQ2KRd7KR-lhDnGuQ&oh=00_AfNg-sqDEJRQ5wrTcq4Pfp8_GQK-l4m7F7RE5RQAPyhxaw&oe=6857F0DD",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/438196101_943272853934719_5247874094214939755_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=AuX1aacj6XoQ7kNvwFLBhAC&_nc_oc=AdllpdTwSQyHk5EpNI9bOOmJGSw8DYhmWa2sqt00KaOGnJFPuEy_UtCRKlfRIxfApYE&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=6wg0cuQ2KRd7KR-lhDnGuQ&oh=00_AfPyu0p1qmDVuXPg9NUc3zWkG6Bh8JcNzr84ohnHR-9rxw&oe=6857F4B5"
      ]
  },
  {
      "website": "Facebook",
      "url": "https://www.facebook.com/marketplace/item/1029106492532137/?ref=search&referral_code=null&referral_story_type=post&tracking=browse_serp%3A2dca02ab-03f9-45f9-be67-98f173ac3f8a&__tn__=!%3AD",
      "title": "Apple Laptop",
      "price": "$120",
      "details": "Condition\nUsed – good\nBrand\nApple",
      "location": "N/A",
      "seller": "https://www.facebook.com/marketplace/profile/100003367424707/?product_id=1029106492532137",
      "seller_rating": "3.7 out of 5 stars, from one review",
      "images": [
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/464734700_3856016671335718_5483929102868006098_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=kdw6lZFFJS0Q7kNvwECmNJ4&_nc_oc=AdmaYx0HAuRy1PCM2LHLsaoW2AB_vYC3Y-uDaZ8Zm2gdP_R4UzVvsxcFRj2WNOATSQU&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=YsPmDJaEnQlQw29fqnPVSw&oh=00_AfOPZaVjK-qjHPbcP4-6VWm8HLKqf6WZ_yS9tGjrwqbyOQ&oe=6857EE09",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/477034591_494672733675382_1080683799616087264_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=WzAibPXXFJ8Q7kNvwFrSI9h&_nc_oc=Adk6WB2CncxFwmcAu7ft4K9a9tHSkljdu6NsvOmP6t0KKsD-C-W83M6F45iWQQhpUtw&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=YsPmDJaEnQlQw29fqnPVSw&oh=00_AfNsLaK_ePSGv4t3dmLN-vJqz26Aff_J8E_RFsoj-BpDAQ&oe=68580C10",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/478469103_657841900011659_313318056772137280_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=ZO01K_rOcFgQ7kNvwGXTEfT&_nc_oc=AdnNiI0OTQwogAv01sLNo0BQu6L23QJ5y0jsPNZ2V8nt6EnFOX6KTFrcrWdPz_7J4H8&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=YsPmDJaEnQlQw29fqnPVSw&oh=00_AfOftxwhU_KC3Svb5GhYXvYum4goi2uvisTsZYRs66IYxw&oe=6857DBA8",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/477346890_634240675754084_7425676164907635404_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=wQmeRjbMh5oQ7kNvwEM4T0N&_nc_oc=AdnR4lMDu7w2E8UG1cLQu3on-e24XYU5ouEpXNYoV6lxLKNI7MKScFtcz1USXOUly5k&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=YsPmDJaEnQlQw29fqnPVSw&oh=00_AfP913HERcwaGnmlx23VrWA66y-R3cRdQy5Y6g_i6TegVg&oe=6857D5E9"
      ]
  },
  {
      "website": "Facebook",
      "url": "https://www.facebook.com/marketplace/item/713593791024269/?ref=search&referral_code=null&referral_story_type=post&tracking=browse_serp%3A2dca02ab-03f9-45f9-be67-98f173ac3f8a&__tn__=!%3AD",
      "title": "2020 Macbook Air",
      "price": "$550",
      "details": "Condition\nUsed – like new",
      "location": "Taylor Mill, KY",
      "seller": "https://www.facebook.com/marketplace/profile/100066286477082/?product_id=713593791024269",
      "seller_rating": "N/A",
      "images": [
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/495368495_876163164677417_1440402105005686657_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=SJmSun_XkN8Q7kNvwFSPKGU&_nc_oc=AdkaqnGqTyOXLGlWwgF14dt-aZL46EE0LqD2APWyOUwgA9SSD0HCTAoVboqp91dbFeI&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=i-sau4f4ZXNhOZ2xQgydnQ&oh=00_AfP1liCva5jjoDlzR8NMXaWFtn_qD-8d-_rxGshQU2BQVA&oe=6857F123",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/495832058_685719597184349_8834855154086751911_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=eUDfv4eiXjkQ7kNvwG7OXfx&_nc_oc=Adn66WWWDosKtcQ1XJ7NQbLlvMNht_H3rwuiSbhhQnt6Kx4gm5pmDN2buZK7wdYTtKU&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=i-sau4f4ZXNhOZ2xQgydnQ&oh=00_AfOHuSWNP1V_1Q9KSTljDIyUXUgDlwtw1VwVIZZXp5NbHQ&oe=6857FA68"
      ]
  },
  {
      "website": "Facebook",
      "url": "https://www.facebook.com/marketplace/item/686729647327166/?ref=search&referral_code=null&referral_story_type=post&tracking=browse_serp%3A2dca02ab-03f9-45f9-be67-98f173ac3f8a&__tn__=!%3AD",
      "title": "Dell Latitude 7390 13.3\" TOUCHSCREEN Laptop Intel Core i7, 512GB SSD, 16GB, W11",
      "price": "$279",
      "details": "Condition\nUsed – like new",
      "location": "N/A",
      "seller": "https://www.facebook.com/marketplace/profile/100011949429533/?product_id=686729647327166",
      "seller_rating": "4.4 out of 5 stars, from one review",
      "images": [
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/504644104_1334649104297813_1500566867606652582_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=BNS2x6V4EzkQ7kNvwEsNgGy&_nc_oc=AdkBHhO3Prj-qIY1bCukn4mXUg233SGwgyN8c2vawTC0owpEq1IEEEy3jzX8lVyc0YE&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=gtLJptsYz5w_RQNN6Xh0xw&oh=00_AfOsFAsjghld63I6_YRMmQ_M1vo-hClGdN_kM_Ku2cW_Kw&oe=6857E4B8",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/504347745_620675966950193_1904176813774181115_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=mo8RRwQo0NUQ7kNvwGzssgl&_nc_oc=AdmU_sBiQ1ppuZBqmzIol9_Rj6nyUPOirySmoCSwpUJ6ZUseTkLlS4F4t-_WBmY5ZnA&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=gtLJptsYz5w_RQNN6Xh0xw&oh=00_AfNT0PQC8Vt_9OmKEtTSIsftMv9QxrpcXzc7CpdGtXv8-w&oe=6857D5EB",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/504300801_1696606930971522_3720156601795197706_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=X1gOmPTsfJ0Q7kNvwHRPu2V&_nc_oc=Adl2EQmVksKCuBkTTlpA39Bm1CAmIcf0sblw7gsIFB9TypCtUS7tE7Mj3SgWgngMtPg&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=gtLJptsYz5w_RQNN6Xh0xw&oh=00_AfNU29nVzUTObQ1G9B3OhszZmdnsouYVWXTHPuVMuwGxdw&oe=685804E3",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/504214332_1798568157672510_5346252974714489133_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=jOSBA8bUrl4Q7kNvwHln2vS&_nc_oc=AdlZc3l1534pciBtGUVMSGgXsHGjvzoWkSTRrcsHfcDjerfnGgBD1Iv67Kypb2DIOlM&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=gtLJptsYz5w_RQNN6Xh0xw&oh=00_AfP9hxIKlF3DEH1CoqQMLO8bXTMWWlEyiBzwwZinGmvH0g&oe=6857E4B2",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/504296196_1351692725909523_4671999162242894108_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=PonlesK4p7IQ7kNvwEKSTF9&_nc_oc=AdmTb9uHOvSRTyiqZg1yi-TjTss4LVOc1t2aU5D6Tg0jcyWLc_WTEbzh48XqK9GOdYU&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=gtLJptsYz5w_RQNN6Xh0xw&oh=00_AfOvNaTNU6b0Yf3I7aWDiIVGJm1W3kU35T_aRGW-c7iQfw&oe=6857F7F1"
      ]
  },
  {
      "website": "Facebook",
      "url": "https://www.facebook.com/marketplace/item/670091302692146/?ref=search&referral_code=null&referral_story_type=post&tracking=browse_serp%3A2dca02ab-03f9-45f9-be67-98f173ac3f8a&__tn__=!%3AD",
      "title": "Gaming Laptop Lenovo Legion Y520(Negotiable)",
      "price": "$435$485",
      "details": "Condition\nUsed – like new\nBrand\nLenovo",
      "location": "Hanover Park, IL",
      "seller": "https://www.facebook.com/marketplace/profile/100024337142726/?product_id=670091302692146",
      "seller_rating": "N/A",
      "images": [
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/505578504_918623443712568_7658042700062378444_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=98NNM9ThAe8Q7kNvwFRhjz-&_nc_oc=AdlQl5BAfm15gn-8B1zB_GFtzVbNzxpB1xPuqHmoa8mSLEEFQjICSx9FtfOEzaCRqwI&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=Awle53YT-3Z5nxVi0W1Rmw&oh=00_AfMvlu2ga1ARRY4_eQEOfpiSsLsFjFt--qUT3VCySm0veQ&oe=6857D93C",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/504594328_1221677492415186_9187840361030444314_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=NaoyDPsDU0sQ7kNvwGMigHz&_nc_oc=AdkC8R3hZAnOzHVSinzD8rowbvWr1vBWXjpmblXUR8nU5U7_c_5hA-8__efZh3fBjX4&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=Awle53YT-3Z5nxVi0W1Rmw&oh=00_AfPF_90PtFgt-wAviS2hgNr9Tr0CdhfJUELiTFV5Co0ZsA&oe=6857DCD9",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/505707156_1024619386486144_7612921517466398035_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=m-HqKsgieC4Q7kNvwG5xj4Q&_nc_oc=AdnExOOwqrlUjcNgbJlF_0q5J44oU8fjdcBKYkTlJ5IuKgsCoqQt5XFTl_qmk6Vh3Ag&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=Awle53YT-3Z5nxVi0W1Rmw&oh=00_AfNlcMopzqXA3nfJC91HnKmzjxGrN80Qr5pstEUSa1hauw&oe=6857DD77"
      ]
  },
  {
      "website": "Facebook",
      "url": "https://www.facebook.com/marketplace/item/1940284536726074/?ref=search&referral_code=null&referral_story_type=post&tracking=browse_serp%3A2dca02ab-03f9-45f9-be67-98f173ac3f8a&__tn__=!%3AD",
      "title": "4GB INTEL I7-2620M HP ELITEBOOK 8560W LAPTOP W/ 500GB HDD NVIDIA QUADRO 1000M",
      "price": "$100$120",
      "details": "Condition\nUsed – good\nBrand\nHP",
      "location": "Carmel, IN",
      "seller": "https://www.facebook.com/marketplace/profile/1117026429/?product_id=1940284536726074",
      "seller_rating": "4.2 out of 5 stars, from one review",
      "images": [
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/498588484_1463492351685437_6803067185063245654_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=TbevNW66VQgQ7kNvwGq-mZt&_nc_oc=AdljZSS9C2iW5OAouRFtkMIAdy8_CunqjCvxA6PfnKohuUgjb7jegbXzj_KYs8JMDjw&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=sKIv4NtpTxvM1Uk-42urOw&oh=00_AfP8meJbzRwKq9Nn958VJPo9aA5wBiXvSr2YBUHxgYvBFg&oe=6857DB25",
          "https://scontent.fyxk1-1.fna.fbcdn.net/v/t45.5328-4/498717822_1389322682113542_1596475673687460835_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=iRO0_39xP3sQ7kNvwFZbHaF&_nc_oc=AdlyIRbp6LzLGBx40WBl2_JU5_6sydXXDXTpyaeKxYHbvPEgqMCPOa18bw7kmqafQ_A&_nc_zt=23&_nc_ht=scontent.fyxk1-1.fna&_nc_gid=sKIv4NtpTxvM1Uk-42urOw&oh=00_AfMBUbcR-57u1nCracX-osaoARl7yGuUvbYGh7WGomWG7Q&oe=68580AA2"
      ]
  }
]

const listings = originalListings.map(item => ({
  ...item,
   category:'Uncategorized',       // ensure string
  risk_level:  'Unknown',         // ensure string
  ai_confidence:  80,
  images: [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
  ]
}));


import BottomNavbar from '../components/BottomNavbar';
import CategoryChartsSlider from '../components/graphsslider';
import Navbar from '../components/Navbar';
import ProductListing from '../components/ProductListings';
import RoadmapVertical from '../components/Roadmap';
import PlanRoadmapMobile from '../components/RoadMapMobile'
import RoadmapPage from '../components/RoadMapPage';
import SettingsPage from '../components/SettingsPage';
import SidebarFilters from '../components/Sidebar';

import { useEffect, useState } from 'react';
import { useListingStore } from '../store/useListings';
import ScrollViewPage from '../components/ScrollView';
import { useDeviceType } from '../hooks/useDeviceType';


export default function FlipMineApp() {
  const [plan] = useState(listings);
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((s) => !s);
  const { setListings } = useListingStore();
  const device = useDeviceType();

  useEffect(() => {
    // load your listings into global store
    
    setListings(listings);
  }, [setListings]);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Fixed header */}
      <Navbar
        setShowRoadmap={setShowRoadmap}
        setShowSettings={setShowSettings}
        setShowScroll={setShowScroll}
      />

      {/* Content below header */}
      <div className="pt-16 flex flex-1 overflow-hidden">
        {/* Optional sidebar */}
        <SidebarFilters
          showSidebar={showSidebar}
          toggleSidebar={toggleSidebar}
        />

        {/* Single scroll-pane */}
        <main className="flex-1 overflow-auto pl-6 pt-4 bg-gray-900 scrollbar-hide">
          {device === 'mobile' ? (
            <>
              {showSettings ? (
                <SettingsPage />
              ) : showRoadmap ? (
                <RoadmapPage plan={plan} />
              ) : (
                <>
                  <CategoryChartsSlider />
                  <h2 className="text-lg font-bold text-cyan-500 mt-4">
                    just sold🔥🔥
                  </h2>
                  <PlanRoadmapMobile plan={plan} />
                  <ProductListing
                    listings={plan}
                    showScroll={showScroll}
                    setShowScroll={setShowScroll}
                  />
                </>
              )}

              {/* Mobile bottom nav */}
              <BottomNavbar
                showRoadmap={showRoadmap}
                setShowRoadmap={setShowRoadmap}
                showSettings={showSettings}
                setShowSettings={setShowSettings}
                showScroll={showScroll}
                setShowScroll={setShowScroll}
              />
            </>
          ) : (
            <>
              {showSettings && <SettingsPage />}

              {showScroll ? (
                <ScrollViewPage />
              ) : !showRoadmap && !showSettings ? (
                // Desktop two-column layout
                <div className="flex flex-1 gap-6 overflow-hidden">
                  {/* Left: listings */}
                  <div className="flex-1 overflow-auto scrollbar-hide pr-4">
                    <CategoryChartsSlider />
                    <h2 className="text-lg font-bold text-cyan-500 mt-4">
                      just sold🔥🔥
                    </h2>
                    <PlanRoadmapMobile plan={plan} />
                    <ProductListing
                      listings={plan}
                      showScroll={showScroll}
                      setShowScroll={setShowScroll}
                    />
                  </div>

                  {/* Right: roadmap */}
                  <div className="w-80 overflow-auto scrollbar-hide">
                    <RoadmapVertical plan={plan} />
                  </div>
                </div>
              ) : showRoadmap ? (
                // If “roadmap” toggled on desktop
                <div className="overflow-auto scrollbar-hide">
                  <RoadmapVertical plan={plan} />
                </div>
              ) : null}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
