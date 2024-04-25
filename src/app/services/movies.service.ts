import { Injectable } from '@angular/core';
import { movies, review } from './movies';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }
  movieList : movies[]=[
    {
      movieId:1,
      movieImage:'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/tillu-square-et00343267-1666852723.jpg',
      movieName:'DJ tillu2',
      movieType:'Romantic crime comedy',
      movieDescription:'',
      movierating:'4.1*',
      movieType1:'telugu'
    },
  
    {
       movieId:2,
       movieImage:'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/manjummel-boys-telugu-et00393618-1712061464.jpg',
       movieName:'Manjummal boys',
       movieType:'Adventure/Drama/Thriller',
       movieDescription:'A group of friends get into a daring rescue mission to save their friend from Guna Caves, a perilously deep pit from where nobody has ever been brought back.',
       movierating:'3.7*',
      movieType1:'telugu'
     },
     {
       movieId:3,
       movieImage:'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/geethanjali-malli-vachindhi-et00389375-1709210497.jpg',
       movieName:'Gitanjali',
       movieType:'Horror',
       movieDescription:'Geethanjali Malli Vachindhi is a horror comedy starring Anjali, Srinivas Reddy, Satya, Sunil, Ali, Ravi Shankar and Satyam Rajesh in prominent roles. It is directed by Shiva Turlapati.',
       movierating:'3.5*',
       movieType1:'telugu'
     },
     {
       movieId:4,
       movieImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4aIzMDxLw5Tjk9YVmj_lURYwsr0i1beqQR2JHTj5ODw&s',
       movieName:'KGF 2',
       movieType:'Action/Thriller',
       movieDescription:'The blood-soaked land of Kolar Gold Fields (KGF) has a new overlord now - Rocky, whose name strikes fear in the heart of his foes. His allies look up to Rocky as their saviour, the government sees him as a threat to law and order; enemies are clamouring for revenge and conspiring for his downfall. Bloodier battles and darker days await as Rocky continues on his quest for unchallenged supremacy.',
       movierating:'4.82*',
       movieType1:'telugu'
     },
     {
       movieId:5,
       movieImage:'https://mellowplex.s3.amazonaws.com/uploads/item/asset/30408/Salaar_profile_picture.png',
       movieName:'Salaar',
       movieType:'Thriller/Action',
       movieDescription:'Brace yourself for an extraordinary tale of rebellion filled with power-packed action.',
       movierating:'4.41*',
       movieType1:'telugu'
     },
     {
       movieId:6,
       movieImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqJ3UU4rX4wIcUdfRZRBLdTo_UXZzN7mYNJcH0AIJfQ&s',
       movieName:'RRR',
       movieType:'Action/Thriller',
       movieDescription:'RRR is a period drama set in India during the 1920s, revolving around the inspiring journey of two of India`s freedom fighters - Alluri Sitarama Raju and Komaram Bheem.',
       movierating:'4.79*',
       movieType1:'telugu'
     },
     {
       movieId:7,
       movieImage:'https://pbs.twimg.com/media/E4tMgmLUUAcHq9p.png',
       movieName:'Pushpa',
       movieType:'Thriller/Action',
       movieDescription:'Based on the smuggling of red sander trees in Seshachalam forest, Andhra Pradesh, Pushpa tells the story of a lorry driver who is part of the illegal business.',
       movierating:'4.2*',
       movieType1:'telugu'
     },
     {
       movieId:8,
       movieImage:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-250,h-390/et00353571-zhgzgwshrh-portrait.jpg',
       movieName:'Balagam',
       movieType:'Drama',
       movieDescription:'Komurayya is an old man who lives with his son Ailayya and grandson Saayilu. The grandson is in a lot of debt and decides to get married to clear the debts with the dowry. Things change when Komurayya`s passes away three days before his engagement. His family comes to town for the last rites but fail to satisfy Komurayya`s soul. Could his family members meet his needs?',
       movierating:'4.4*',
       movieType1:'telugu'
     },
     {
       movieId:9,
       movieImage:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00389163-tgqeelnseu-portrait.jpg',
       movieName:'Om Bhim Bush',
       movieType:'Comedy Drama',
       movieDescription:'Three research scientists venture into a fictional village Bhairavapuram and instead of relying on Sorcery, they use science to ward off ghosts and find treasures (Lanke Bindalu).',
       movierating:'3.4*',
       movieType1:'telugu'
     },
     {
       movieId:10,
       movieImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxMcaOhrfBpGHbSZLDPu1HN9fuYw1ladazQyHKfxiHNg&s',
       movieName:'Tiger',
       movieType:'Thriller/Action',
       movieDescription:'Based on true rumours of India`s biggest thief Tiger Nageswara Rao and his hometown of Stuartpuram. Why is he regarded as the biggest thief of India?',
       movierating:'3.2*',
       movieType1:'telugu'
     },
     {
       movieId:11,
       movieImage:'https://timesofindia.indiatimes.com/photo/87782742.cms',
       movieName:'Poster',
       movieType:'Drama Romantic',
       movieDescription:'Every human being faces problems whether it be studies, career, or love. Suicide is not the solution to any of these. Revolving around this concept, Poster tells the story of a man who faces such issues and works to overcome them.',
       movierating:'4.2*',
       movieType1:'telugu'
     },
     {
       movieId:12,
       movieImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ZLzf8eh9xHHbhD5wsxbOmYVylpTYXIB3m7kf88hZiw&s',
       movieName:'Radheshyam',
       movieType:'Romance/Action',
       movieDescription:'The film is a musical love story set in the backdrop of Europe in the 1970`s. It weaves in a heartwarming story which questions the foundations of Love, Human Nature, Science, Spirituality and Philosophy through a musical drama',
       movierating:'4.32*',
       movieType1:'telugu'
     },
     {
       movieId:13,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfuA-MMgcT_rF8s1n_5qs3niXyKzoP_-8ULj6Thzab7zNcM9_AnKAgjFdoDoqbbIVrMOS7o0oDr54zJlfyDq2M6k7AQrm_BMNBhoQseoD06UijEoj_VaDFB-Lxo8yopW7sG0.jpg?r=36f',
       movieName:'Luther the fallen sun',
       movieType:'Thriller/Mistery',
       movieDescription:'ince the fifth season of the criminal thriller series concluded in 2019 with a cliffhanger and investigator John Luthers imprisonment, fans have been on the edge of their seats.',
       movierating:'4.76*',
       movieType1:'hollywood'
     },
     {
       movieId:14,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbByOWfFGaF-ja6vDdO5ldH6k3Dt9JL8UVipoC2ruzNEi6JRryp9gKIz5yhzq2kpZ9EvTQdClUwlX_SH4oWDdkaPGG8V1IFJI2cuf7pvrIRbPLwe84flMv4Fli8FmWwcf9Dy.jpg?r=fe1',
       movieName:'The Killer',
       movieType:'Action/Thriller',
       movieDescription:'While serial killer David Robey (Andy Serkis) terrorizes London, disgraced detective John Luther (Idris Elba) sits behind bars. Haunted by his failure to capture the cyber psychopath who now taunts him, Luther decides to break out of prison to finish the job by any means necessary.',
       movierating:'4.23*',
       movieType1:'hollywood'
     },
     {
       movieId:15,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVv4MVHMr57Yb2t7QjObsFQj4k6CwvPKLw0ZzhWak5SQPnoAP8mF8-8Po7jvguNiWsEW80S4cxEY09LMB7bAFuO0cwIfiid8Too.jpg?r=d4b',
       movieName:'Aquaman',
       movieType:'Action/Fantacy',
       movieDescription:'When an ancient power is unleashed, Aquaman must forge an uneasy alliance with an unlikely ally to protect Atlantis, and the world, from irreversible devastation.',
       movierating:'4.76*',
       movieType1:'hollywood'
     },
     {
       movieId:16,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUKuiaphxNDLHwsYAz3XRpngzLfjyskKtNpykqZFjONDNio2rW_Nxqw9d8zEw4QxNYjwK4bTn9uP1NMkHV42GnWdBWGYW827xnQ.jpg?r=e68',
       movieName:'Joker',
       movieType:'Thriller/Crime',
       movieDescription:'Arthur Fleck, a man struggling with loneliness and isolation, wears two masks. One, he paints on for his day job as a clown. The other is a guise he projects in an attempt to find his place in Gotham City`s fractured society.',
       movierating:'4.56*',
       movieType1:'hollywood'
     },
     {
      movieId:17,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYWl2k4-MvVO9LaXWjjkcSwAvNnd6QKJleDQcOTfljQ16LFFgLgArheqdaIhHrjTHf8PNXv5r_IROHyZD8CMq1Fa84v1w7PNJts.jpg?r=869',
       movieName:'Monster Hunter',
       movieType:'Action/Adventure',
       movieDescription:'When Cpt. Artemis and her loyal soldiers are transported to a new world, they engage in a desperate battle for survival against enormous enemies with incredible powers. Feature film based on the video game by Capcom.',
       movierating:'4.42*',
       movieType1:'hollywood'
     },
     {
       movieId:18,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRhybUqTpg08T8TnfSlW1TPvVx4rMoeyARJusNHmFijC4KWeaoSl9QSkEFSlLFXCZC4pITSugdJhfWa1jkM8Ina1EMepcEIntBvhg4f1kvs3f51AEJbfEFSx6B718Jng8r3j.jpg?r=e0f',
      movieName:'Damsel',
       movieType:'Action/Adventure',
       movieDescription:'Elodie (Millie Bobby Brown), a dutiful young woman married to a handsome prince, discovers that she has been embroiled in a conspiracy and is thrown into a cave with a fire-breathing dragon by the royal family, to repay an ancient debt. ',
       movierating:'4.12*',
       movieType1:'hollywood'
     },
     {
       movieId:19,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABabXzkiAl14ukF9BjhtVn3IapeF7WSfL7_f6ZkAoDQ3ou1yXRFjN37Sv_t8MHfYce7cR6lK9ZDhVeqedqM5C1EB9T1gZNQeM7Pc.jpg?r=dd7',
       movieName:'The fate of the furious',
       movieType:'Action/Crime',
       movieDescription:'Cipher, a notorious international cybercriminal, uses Dominic`s little known secret as leverage to force him to join her for a mission to start a global nuclear war.',
       movierating:'4.1*',
       movieType1:'hollywood'
     },
     {
       movieId:20,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABU1pcTLA8Aro1DK0IdujPz38HSl1SUC7--zJMHw4r8iUoCo0DFTjWKu8SlYf1Wp_U6bmF0huFAJuqEh03WM0uzQ3GzmB2a2kn8E.jpg?r=7ca',
       movieName:'The Batman',
       movieType:'Crime/Action',
       movieDescription:'The caped crusader, Bruce Wayne joins hands with unlikely allies to unmask a sadistic serial killer who`s leaving bodies across Gotham city.',
       movierating:'4.6*',
      movieType1:'hollywood'
     },
     {
       movieId:21,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTTUgDg59T93bxyYFsJL9mx_5SSckzvhPRZnRwE9aVa_OPj2pjDJ27eQiDwwT8UCYPG12qsxNkqJ5TL3AgSTOjJEMla43NqpyzI.jpg?r=4bd',
       movieName:'The Social Network',
       movieType:'Documentary/Drama',
       movieDescription:'The film focuses on the evolution of Facebook, created in 2004 on the Harvard campus, and how overnight success and wealth changed the lives of the classmates who created it.',
       movierating:'4.45*',
       movieType1:'hollywood'
     },
     {
       movieId:22,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABchV-WQkI3IQmXv5E_6Q_Iqdza1RnYRWA9IWD-e63Su5JGTkYSpC49aZuEyrTuzRnfrobFP2QTgg_yBZZGhLZLhNcWzUPLovKp8.jpg?r=4ba',
       movieName:'Ticket to paradice',
       movieType:'Romance comedy',
       movieDescription:'Bitter exes Georgia (Julia Roberts) and David (George Clooney) team up to stop their daughter, Lily (Kaitlyn Denver), from committing the biggest mistake of her life: getting married.',
       movierating:'4.4*',
       movieType1:'hollywood'
     },
     {
       movieId:23,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZyyBhZ_Ja90kB7cNQGXyzcgHdCC1HnXQDJ36sLZqPQYNWi4iE2-QQf5cJgwtQpB-JbmWDFN_n0vBqaMVKL7Ncsq6HHJjsTkqH4.jpg?r=45c',
       movieName:'Pacific Rim:Uprising',
       movieType:'Action/Sci-fi',
       movieDescription:'The globe-spanning conflict between otherworldly monsters of mass destruction and the human-piloted super-machines built to vanquish them was only a prelude to the all-out assault on humanity in Pacific Rim Uprising.',
       movierating:'4.21*',
       movieType1:'hollywood'
     },
     {
       movieId:24,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQALIg8xyXGoJjuv46AGq8M4-nf7V_gOAhL59Il4OUexsD4cABrSWarSzDbY6xoXQKRZrQcpDatwMtKd6HfKcnx3GSNH7CHX7xA.jpg?r=a31',
       movieName:'Black Adam',
       movieType:'Action/Adventure',
       movieDescription:'A slave-turned-god, Teth-Adam (Dwayne Johnson) breaks free of his prison and fights to save his homeland from an ancient evil.',
       movierating:'4.84*',
       movieType1:'hollywood'
     },
     {
       movieId:25,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABU_QoJ_ZpH--QTAPwFeXBVXi8v5LdfeS8h1gercZHd18BL-U0IfhGjIkbh68LVh1Ov07xBy_5Q5VEhOIqjUWAzU9zZaBBaVnxtueIp_u9-vQv9LWHZqzgag0HiACu6kI_wCsOUvlIB-QqHdYArNuODAX_P6bL6RyTi8.jpg?r=434',
       movieName:'Animal',
       movieType:'Action/Drama',
       movieDescription:'This is the story of a son whose love for his father knows no bounds. As their bond begins to fracture, a chain of extraordinary events unfold causing the son to undergo a remarkable transformation consumed by a thirst for vengeance.',
       movierating:'4.12*',
       movieType1:'bollywood'
     },
     {
       movieId:26,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABV1D3BFin5nSB90HF5dzTy6n9yHXnyU_YH9t3kdwuUwBHbXoqmtpHKqAfYWOlH2B9p9_EcxFVJkeE0Su0qQMAQLUUUtrIJ6TQpI9IwsVtsLOu6qC7o4eTMt-0M_6ZDKwG3EO.jpg?r=23e',
       movieName:'Mission Manju',
       movieType:'Action/Thriller',
       movieDescription:'Set in the 1970s, the film captures Indias most courageous and audacious covert operation in Pakistan.',
       movierating:'4.22*',
       movieType1:'bollywood'
     },
     {
       movieId:27,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABe-UWKkNZCaBf4eKDZKV0AheMH_O25uxYVSdmwmJKbPhM_BQKVTYX35XhskSwkpM9w1mBZ9TkrYN4U01XHTPkUDyrTkFyJmwjQE.jpg?r=a6c',
       movieName:'Goodbye',
      movieType:'Family Comedy-Drama',
      movieDescription:'A heartwarming story of the Bhalla family that depicts their journey of grief and self-discovery after they suffer the loss of their loved one. The film will take you on a roller-coaster ride of emotions, making you laugh at some moments and leaving you teary-eyed at some.',
       movierating:'3.12*',
       movieType1:'bollywood'
     },
    {
       movieId:28,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR2c-sQPEr9nPeo-ug311r-qpcR77QRIN3Q2vZ_FVRLXAypHjOdawBBAKP-miWJWJPRWnZnynG1Zb_fJusMad5jGycVzFh6s_vGaIgOsOuoGtUwTu-QhI-WvbolCRVVTDLYTGB5HmALdtmuQ9K16miMu7UkkcAU6Lpw.jpg?r=804',
       movieName:'Fighter',
       movieType:'Action/Thriller',
       movieDescription:'Top IAF aviators come together in the face of imminent danger, to form Air Dragons. Fighter unfolds their camaraderie, brotherhood and battles, internal and external.',
       movierating:'3.65*',
       movieType1:'bollywood'
     },
     {
     movieId:29,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR_Sa8OYMVTUMU7nsJ_YJVmJHNi-Gk6F8f5Gs7ztOYoJbuEfQ_d94tkKIrPoi5wDG-YeXp0RW6SzP808Ov4lvTS5RMJdqE8_R5ycPrAI2G1KQoM_Q44xeM6ud7a1sYbwoC8AKzs3wgIYSXOywfB7GVq1oZ7fo61Mno7dPzGLyIZ6BuHHW42brJIJmphDkrDfDoJcTXNrLYK151IZkqLJAcDwRKENIr0_DdGI5vK_rhL0JxF8SURZD8bauz8Mv-zmEaV7HYBMfNhXnQpbZLPwA4qnaP7wqwdoEj__uLaatKQ7niXVcrpD8g-3ePAHP82-4KqAaljU-isV1NHBJastcdA.jpg?r=87a',
       movieName:'Article 370',
       movieType:'Action/Thriller',
       movieDescription:'In the aftermath of the 2016 Kashmir unrest, a young local field agent, Zooni Haksar, is picked out by Rajeshwari Swaminathan from the Prime Minister`s Office for a top secret mission.',
       movierating:'3.91*',
       movieType1:'bollywood'
     },
     {
       movieId:30,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABetoGk0CLIkPxKr6MMuFswl25hF_gsw1TIvJakiPx32KBAPxk4wVqHDMPX2vPjBXdHr45GtWlm7ARQUlBfkMhQZ6v1akZbdncW8.jpg?r=cfe',
       movieName:'Jawaan',
       movieType:'Action/Thriller',
       movieDescription:'A high-octane action thriller that outlines the emotional journey of a man who is set to rectify the wrongs in society.',
       movierating:'4.4*',
       movieType1:'bollywood'
     },
     {
       movieId:31,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfF6DDP9H0k3knc4_Uh2-SECtSrqoG6SQmvrWAmf12GWPRHP--iiQclbKu6xhsdzYz4_BTBj7g3LJWlcOK7P-3AUUNgdeerNUfk.jpg?r=e65',
       movieName:'Dunki',
       movieType:'Comedy/Drama',
       movieDescription:'Four friends from a sleepy little village in Punjab share a common dream: to go to England. Their problem is that they have neither the visa nor the ticket. A soldier alights from a train one day, and their lives change. He gives them a soldier`s promise:',
       movierating:'3.12*',
       movieType1:'bollywood'
     },
     {
       movieId:32,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaXxVqLyX7LZ-NOiljaPA1R2X6IDgJ1XR4WbcEysw5DRrNTR5MpVKYsMGYWc94-koLLg6nuPNgdhz-1fzULL6eTW9vbfvdko-dhR23lQe5vefPbysukKDo-7OLgOGzWT1CDFIL6RwmzGyHTVm6ZmBI_elE_CAkWDHnu4_wl5h4Z_-KU47T1ZJ1bssNLMoKA.jpg?r=ae6',
       movieName:'Murder Mubarak',
       movieType:'Mistery/Comedy',
       movieDescription:'Pankaj Tripathi plays a detective. The suspects are played by Sara Ali Khan – a princess from South Delhi, Vijay Varma – a deadly lover from Chandni Chowk, Karisma Kapoor – a dream girl from suspense movies, Dimple Kapadia – a drunken artist, Tisca Chopra – a gossipmonger, and Sahail Nayyar – a party animal. Chaos and laughter follow. ',
       movierating:'3.51*',
       movieType1:'bollywood'
     },
     {
       movieId:33,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeuxairVzLlMC2hvzQ00VUkzHfpWpewSc8729B_xvkRUsGV4rBVlc718ugnKnk7zbbyADvCIztxD7fTcnJyhYfroAMZny1aGTXA.jpg?r=62d',
       movieName:'OMG2',
       movieType:'Comedy/Thriller',
       movieDescription:'Life is bliss until one day Kanti Sharan Mudgal`s son Vivek is blamed for immoral conduct and expelled from school. Overwhelmed, Kanti plans to leave town until a divine intervention leads him to seek justice by taking those responsible to court.',
       movierating:'4.1*',
       movieType1:'bollywood'
     },
     {
       movieId:34,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcrCscVAFTUpRdBa6VJG-XMdtVIQvjtkXuZsTqQOKzaogG7-1oCAObq_vB3x-5Y1Qo21vguGu7yXUGccSLDY1pR6211beDxZqqc.jpg?r=875',
       movieName:'Talaash',
       movieType:'Mistery/Thriller',
       movieDescription:'Seeing reflections of Mumbai under the red light, `Talaash` is a tale of love lost, fatal attraction and above all the quest to solve a perfect crime. Suspense at its core, `Talaash` explores Mumbai`s underbelly like never before.',
       movierating:'4.32*',
       movieType1:'bollywood'
     },
     {
       movieId:35,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTXaDXAzGH01IWIKP0vrxGJc3Jpe-v0sxxLpSdiySuUTPlA1cikFjILGXhnu3A6B3wi4vkgDZH-PPD7_ZAdEL_lxg-TrvYkr6-A.jpg?r=4f8',
       movieName:'83',
       movieType:'Sport/Drama',
       movieDescription:'1983 Cricket World Cup taught India to win. 14 men fought against all odds. This is their Story!',
       movierating:'4.1*',
       movieType1:'bollywood'
     },
     {
       movieId:36,
       movieImage:'https://occ-0-2040-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSYrXdObr8v0pQkFqBhsl55wJXb8c-ANYCQm5VUrW-9rzJamOTW2nk7BsQuj9lYpn7811nW3XLq0UxtOBRL5upABblPJYvwI17k.jpg?r=6e4',
       movieName:'Doctor G',
       movieType:'Comedy/Drama',
       movieDescription:'Uday Gupta finds himself as the lone male student in the Gynaecology department. His reluctance leads to chaos, confusion, comedy and eventually, great camaraderie with his fellow classmates.',
       movierating:'3.12*',
       movieType1:'bollywood'
     }
    
  ]

  moviereview:review[]=[];

  addreview(review:review){
    this.moviereview.push(review);
   console.log(review);
  }


  getMovies(){
    return of (this.movieList);
  }

  getReviews(){
    return of (this.moviereview);
  }


  getMovieById(mId:any): any {
    for(let m of this.movieList){
      if(m.movieId==mId)
        {
          return m;
        }
    
    }
  }
  
}
