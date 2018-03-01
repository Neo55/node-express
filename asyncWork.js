function displaySync(data, callback){
    var randInt = Math.random() * (10 - 1) + 1;
    var err = randInt > 5 ? new Error('Ошибка выполнения. Переменная больше 5') : null;
    
    setTimeout(function(){
        callback(err, data);
    }, 0);
}

console.log('Начало работы');

displaySync('Обработка...', function(err, data) {
    if (err) throw err;

    console.log(data);
});

console.log('Завершение работы');