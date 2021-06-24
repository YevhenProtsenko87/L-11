var obj = {anonim: {say: 'Hello anonim'}, user: {say: 'Hello user'}, admin: {say: 'Hello admin'}};

function greeting(who) {

    console.log(this[who]);

};

greeting.call(obj, 'user');


//-----------------------------


var user = {name: 'Алексей'}

function func(surname, patronymic) { 

    alert('привет' + ', ' + this.name + ' ' + patronymic + ' ' + surname); 
    
};

func.apply(user, ['Петров' , 'Алексеевич']);

