'use strict'
function Person(data){
    this.name=data.name;
}

Person.prototype.render=function(){
//console.log(this.name);
//badal men hay ba2dar a3mel ..
/*$('ul').append(
    `<li>${this.name}</li>`)*/
    //ba2dar a3mel eli foo2 be tare2a tanye
    //hoon ra7 awjed al li la2no ana ma3tye class name elha person-template
    // .clone() it copies what  inside person-template
    let personClone=$(`.person-template`).clone();
    personClone.removeClass('person-template');
    //then i put my data in the template
    //personClone.text(this.name);

    //heek sar almawdoo3 shawi a38ad
    //heek roo7 la2i span and in that span and in that span make the text equal this.name
    //personClone.find('span').text(this.name);

    //eza kan 3endi la alclass esem heek ba3mel
    personClone.find('.ppl').text(this.name);

    //hala2 bedi awjed al ul
    //3melet append la altemplate eli 3melto 3ala al ul
    $('ul').append(personClone);
    
};

//i want to find the button =>>$('button')
$('button').on('click',function(){
//hoon al console 3ashan ashoof mata ana 3melet click
    console.log('clicked');
    //hala2 hoon bedi a3mel toggle lal ul 
    //bedi awal eshi 2ala2i alul
    $('ul').toggleClass('on');
    //toggle class lama a3mel click it put the class on when hit it again put it off
    

   //$('ul').show();
      //ba2dar a3melo betare2a tanyeh
//o ba5ali be css display:none la2no show() works with display none



//fi kaman had ba2dar a3melo eza ana 3amleh display:none 
//had be3mel fade o ana ba7aded alsor3a eli bedi yaha be ms
//$('ul').fadeIn(800);

//hala2 eza bedi atala3 3a kol 3onsor be alul la7alo
//heek had alfuncton ra7 yen3amalo invoke kol ma a3mel click 3ala al li
//o alfunction wazefto eno yetba3 altext taba3 kol shi ben3amal 3aleeh click
$('ul').on('click','li',function(){
    console.log($(this).text());
})
});



//i want to do something when i click that button =>>on('click',)

//the thing i want to do i will put it in a function
//la3'eet kol al ul bedi lama a8ra2 alfile yen3amalhom appear

//hai method bet5aleni a8ra2 alfile
//get the people file then give me the data inside it and run this function heek ma3na aljomleh  
$.get('./people.json')
.then(data =>{
   // console.log(data);
    data.forEach((value,indx) => 
    {
        //each person have a neme
        //for eash person get the name
       // console.log(value.name);
//instead of the above i'm going to use the function i wrote at the begining

let person=new Person (value);
  person.render();      
    });
})
