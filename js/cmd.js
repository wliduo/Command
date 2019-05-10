var inputReady = true;
var input = $('.404-input');
input.focus();
$('.container').on('click', function(e){
	input.focus();
});

document.onclick = function(){
	input.select();
}

input.on('keyup', function(e){
	$('.new-output').text(input.val());
	// console.log(inputReady);
});

$('.four-oh-four-form').on('submit', function(e){
	e.preventDefault();
	var val = $(this).children($('.404-input')).val().toLowerCase();
	var href;

	if (val === 'kitten') {
		showKittens();
	} else if(val === '神兽' || val === '草尼玛' || val === 'beast') {
		showBeast();
	} else if(val === '女生' || val === '女神' || val === 'goddess') {
		showGoddess();
	} else if(val === '老鼠' || val === 'mouse') {
		showMouse();
	} else if(val === 'wang') {
		window.location = "https://dolyw.com";
	} else if(val === 'life') {
		window.location = "https://note.dolyw.com";
	} else if(val === 'pic' || val === '图片' || val === 'photo' || val === 'picture') {
		window.location = "https://char.dolyw.com/pic-to-char";
	} else if(val === 'video' || val === '视频') {
		window.location = "https://char.dolyw.com/video-to-char";
	} else if(val === '01') {
		window.location = "https://text.dolyw.com/css3-colorful-text-shadow";
	} else if(val === '02') {
		window.location = "https://text.dolyw.com/css3-loading-text-animation";
	} else if(val === '03') {
		window.location = "https://text.dolyw.com/css3-text-shadow-animation";
	} else if(val === '04') {
		window.location = "https://text.dolyw.com/css3-text-water-loading";
	} else if(val === '05') {
		window.location = "https://text.dolyw.com/html5-3d-letter-text";
	} else if(val === '06') {
		window.location = "https://text.dolyw.com/html5-css3-3d-text";
	} else if(val === '07') {
		window.location = "https://text.dolyw.com/html5-css3-fire-text";
	} else if(val === '08') {
		window.location = "https://text.dolyw.com/html5-shine-text";
	} else if(val === '09') {
		window.location = "https://text.dolyw.com/html5-swing-text";
	} else if(val === '10') {
		window.location = "https://text.dolyw.com/html5-text-pixel";
	} else if(val === 'sh' || val === 'linux' || val === '命令') {
		window.location = "https://cmd.dolyw.com/sh";
	} else {
		resetForm();
	}
});

// 各种神兽代码 https://blog.csdn.net/vbirdbest/article/details/78995793

function showKittens(){
	$('.terminal').append("<div class='kittens'>"+
		"<p class='prompt'>  ┏┓      ┏┓</p>" +
		"<p class='prompt'>┏┛┻━━━┛┻┓</p>" +
		"<p class='prompt'>┃      ☃      ┃</p>" +
		"<p class='prompt'>┃  ┳┛  ┗┳  ┃</p>" +
		"<p class='prompt'>┃      ┻      ┃</p>" +
		"<p class='prompt'>┗━┓      ┏━┛</p>" +
		"<p class='prompt'>    ┃      ┗━━━┓</p>" +
		"<p class='prompt'>    ┃  神兽保佑    ┣┓</p>" +
		"<p class='prompt'>    ┃　永无BUG！   ┏┛</p>" +
		"<p class='prompt'>    ┗┓┓┏━┳┓┏┛</p>" +
		"<p class='prompt'>      ┃┫┫  ┃┫┫</p>" +
		"<p class='prompt'>      ┗┻┛  ┗┻┛</p>" +
		"<p class='prompt'></p></div>"
	);

	var lines = $('.kittens p');
	$.each(lines, function(index, line){
		setTimeout(function(){
			$(line).css({
				"opacity": 1
			});
			
			textEffect($(line))
		}, index * 100);
	});

	$('.new-output').velocity(
		'scroll'
	), {duration: 100}

	setTimeout(function(){
		var gif;
		$('.terminal').append('<img class="kitten-gif" src="https://dolyw.gitee.io/reader/Image/201810/normal/30005.gif">');
		resetForm('kitten');
	}, (lines.length * 100) + 1000);
	// window.location="https://dolyw.com";
}

function showMouse(){
	$('.terminal').append("<div class='kittens'>"+
		"<p class='prompt'> .--,       .--,</p>" +
		"<p class='prompt'>( (  \\.---./  ) )</p>" +
		"<p class='prompt'> '.__/o   o\__.'</p>" +
		"<p class='prompt'>    {=  ^  =}</p>" +
		"<p class='prompt'>     >  -  <</p>" +
		"<p class='prompt'>    /       \\</p>" +
		"<p class='prompt'>   //       \\\\</p>" +
		"<p class='prompt'>  //|   .   |\\\\</p>" +
		"<p class='prompt'>  &quot;'\\       /'&quot;_.-~^`'-.</p>" +
		"<p class='prompt'>     \\  _  /--'         `</p>" +
		"<p class='prompt'>   ___)( )(___</p>" +
		"<p class='prompt'>  (((__) (__)))</p>" +
		"<p class='prompt'></p></div>"
	);

	var lines = $('.kittens p');
	$.each(lines, function(index, line){
		setTimeout(function(){
			$(line).css({
				"opacity": 1
			});
			
			textEffect($(line))
		}, index * 100);
	});

	$('.new-output').velocity(
		'scroll'
	), {duration: 100}

	setTimeout(function(){
		var gif;
		$('.terminal').append('<img class="kitten-gif" src="https://dolyw.gitee.io/reader/Image/201810/normal/30010.gif">');
		resetForm('mouse');
	}, (lines.length * 100) + 1000);
	// window.location="https://dolyw.com";
}

function showBeast(){
	$('.terminal').append("<div class='kittens'>"+
		"<p class='prompt'>━━神兽出没━━</p>" +
		"<p class='prompt'> ┏┓     ┏┓</p>" +
		"<p class='prompt'>┏┛┻━━━━━┛┻┓</p>" +
		"<p class='prompt'>┃　　　　　 ┃</p>" +
		"<p class='prompt'>┃　　━　　　┃</p>" +
		"<p class='prompt'>┃　┳┛　┗┳  ┃</p>" +
		"<p class='prompt'>┃　　　　　 ┃</p>" +
		"<p class='prompt'>┃　　┻　　　┃</p>" +
		"<p class='prompt'>┃　　　　　 ┃</p>" +
		"<p class='prompt'>┗━┓　　　┏━┛</p>" +
		"<p class='prompt'>　 ┃　　　┃</p>" +
		"<p class='prompt'>　　┃　　　┃</p>" +
		"<p class='prompt'>　　┃　　　┗━━━┓</p>" +
		"<p class='prompt'>　　┃　　　　　　┣┓</p>" +
		"<p class='prompt'>　　┃　　　　　　┏┛</p>" +
		"<p class='prompt'>　　┗┓┓┏━┳┓┏┛</p>" +
		"<p class='prompt'>　　 ┃┫┫ ┃┫┫</p>" +
		"<p class='prompt'>　　 ┗┻┛ ┗┻┛</p>" +
		"<p class='prompt'>━━感觉萌萌哒━━</p></div>"
	);

	var lines = $('.kittens p');
	$.each(lines, function(index, line){
		setTimeout(function(){
			$(line).css({
				"opacity": 1
			});
			
			textEffect($(line))
		}, index * 100);
	});

	$('.new-output').velocity(
		'scroll'
	), {duration: 100}

	setTimeout(function(){
		var gif;
		$('.terminal').append('<img class="kitten-gif" src="https://dolyw.gitee.io/reader/Image/201810/normal/30015.gif">');
		resetForm('beast');
	}, (lines.length * 100) + 1000);
}

function showGoddess(){
	$('.terminal').append("<div class='kittens'>"+
		"<p class='prompt'>´´´´´´´´██´´´´´´´</p>" +
		"<p class='prompt'>´´´´´´´████´´´´´´</p>" +
		"<p class='prompt'>´´´´´████████´´´´</p>" +
		"<p class='prompt'>´´`´███▒▒▒▒███´´´´´</p>" +
		"<p class='prompt'>´´´███▒●▒▒●▒██´´´</p>" +
		"<p class='prompt'>´´´███▒▒▒▒▒▒██´´´´´</p>" +
		"<p class='prompt'>´´´███▒▒▒▒██´  </p>" +
		"<p class='prompt'>´´██████▒▒███´´´´´</p>" +
		"<p class='prompt'>´██████▒▒▒▒███´´</p>" +
		"<p class='prompt'>██████▒▒▒▒▒▒███´´´´</p>" +
		"<p class='prompt'>´´▓▓▓▓▓▓▓▓▓▓▓▓▓▒´´</p>" +
		"<p class='prompt'>´´▒▒▒▒▓▓▓▓▓▓▓▓▓▒´´´´´</p>" +
		"<p class='prompt'>´.▒▒▒´´▓▓▓▓▓▓▓▓▒´´´´´</p>" +
		"<p class='prompt'>´.▒▒´´´´▓▓▓▓▓▓▓▒</p>" +
		"<p class='prompt'>..▒▒.´´´´▓▓▓▓▓▓▓▒</p>" +
		"<p class='prompt'>´▒▒▒▒▒▒▒▒▒▒▒▒</p>" +
		"<p class='prompt'>´´´´´´´´´███████´´´´´</p>" +
		"<p class='prompt'>´´´´´´´´████████´´´´´´´</p>" +
		"<p class='prompt'>´´´´´´´█████████´´´´´´</p>" +
		"<p class='prompt'>´´´´´´██████████´´´´</p>" +
		"<p class='prompt'>´´´´´´██████████´´´</p>" +
		"<p class='prompt'>´´´´´´´█████████´´</p>" +
		"<p class='prompt'>´´´´´´´█████████´´´</p>" +
		"<p class='prompt'>´´´´´´´´████████´´´´´</p>" +
		"<p class='prompt'>________▒▒▒▒▒</p>" +
		"<p class='prompt'>_________▒▒▒▒</p>" +
		"<p class='prompt'>_________▒▒▒▒</p>" +
		"<p class='prompt'>________▒▒_▒▒</p>" +
		"<p class='prompt'>_______▒▒__▒▒</p>" +
		"<p class='prompt'>_____ ▒▒___▒▒</p>" +
		"<p class='prompt'>_____▒▒___▒▒</p>" +
		"<p class='prompt'>____▒▒____▒▒</p>" +
		"<p class='prompt'>___▒▒_____▒▒</p>" +
		"<p class='prompt'>███____ ▒▒</p>" +
		"<p class='prompt'>████____███</p>" +
		"<p class='prompt'>█ _███_ _█_███</p>" +
		"<p class='prompt'>━━━━━━━━━━━━</p></div>"
	);

	var lines = $('.kittens p');
	$.each(lines, function(index, line){
		setTimeout(function(){
			$(line).css({
				"opacity": 1
			});
			
			textEffect($(line))
		}, index * 100);
	});

	$('.new-output').velocity(
		'scroll'
	), {duration: 100}

	setTimeout(function(){
		var gif;
		$('.terminal').append('<img class="kitten-gif" src="https://dolyw.gitee.io/reader/Image/201810/normal/30010.gif">');
		resetForm('goddess');
	}, (lines.length * 100) + 1000);
}

function resetForm(withKittens){
	var message = "Sorry that command is not recognized."
	var input = $('.404-input');

	if (withKittens === 'kitten'){
		$('.kittens').removeClass('kittens');
		message = "这才是真猫!!!((>^ω^<))"
	}else if(withKittens === 'beast'){
		message = "神兽保佑-代码无Bug"
	}else if(withKittens === 'goddess'){
		message = "女神保佑-代码无Bug"
	}else if(withKittens === 'mouse'){
		message = "老鼠保佑-代码无Bug"
	}

	$('.new-output').removeClass('new-output');
	input.val('');
	$('.terminal').append('<p class="prompt">' + message + '</p><p class="prompt output new-output"></p>');

	$('.new-output').velocity(
		'scroll'
	), {duration: 100}
}

function textEffect(line){
	var alpha = [';', '.', ',', ':', ';', '~', '`'];
	var animationSpeed = 10;
	var index = 0;
	var string = line.text();
	var splitString = string.split("");
	var copyString = splitString.slice(0);

	var emptyString = copyString.map(function(el){
		return [alpha[Math.floor(Math.random() * (alpha.length))], index++];
	})

	emptyString = shuffle(emptyString);

	$.each(copyString, function(i, el){
		var newChar = emptyString[i];
		toUnderscore(copyString, line, newChar);

		setTimeout(function(){
			fromUnderscore(copyString, splitString, newChar, line);
		},i * animationSpeed);
	})
}

function toUnderscore(copyString, line, newChar){
	copyString[newChar[1]] = newChar[0];
	line.text(copyString.join(''));
}

function fromUnderscore(copyString, splitString, newChar, line){
	copyString[newChar[1]] = splitString[newChar[1]];
	line.text(copyString.join(""));
}

function shuffle(o){
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};