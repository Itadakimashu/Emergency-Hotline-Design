hearts = document.querySelectorAll('#card-heart')

for(heart of hearts){
    heart.addEventListener('click', function(e){
        document.getElementById('total-hearts').innerText++;
    });
}

calls = document.querySelectorAll("#card-call")

for(call of calls){
    call.addEventListener('click', function(e){
        const totalCoins = document.getElementById('total-coins')
        if(totalCoins.innerText >= 20){
            document.getElementById('total-coins').innerText -= 20;
            const title = e.target.closest('.card').querySelector('.card-title').innerText;
            const number = e.target.closest('.card').querySelector('.ph-number').innerText;
            alert('📞Calling ' + title);
            AddCallHistory(title, number)
        }
        else{
            alert('You dont have enough coins.');
        }
    });
}

function AddCallHistory(title,number){
    const callHistory = document.getElementById('call-history');
    const callLog = document.createElement('div');
    

    const time = new Date();
    const hours = time.getHours() % 12 || 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    callLog.innerHTML = 
    `
    <div class="bg-gray-100 p-2 md:p-3 mt-3 md:mt-5 rounded-md flex justify-between items-center">
                    <div>
                        <p class="text-sm md:text-md font-semibold">${title}</p>
                        <p class="text-sm md:text-md text-[#5C5C5C]">${number}</p>
                    </div>
                    <p class="text-xs text-[#5C5C5C]">${hours}:${minutes}:${seconds} ${ampm}</p>
    </div>
    `
    callHistory.appendChild(callLog);
}


copyBtns = document.querySelectorAll("#card-copy");

for(copyBtn of copyBtns){
    copyBtn.addEventListener('click', function(e){
        const number = e.target.closest('.card').querySelector('.ph-number').innerText;
        navigator.clipboard.writeText(number);
        alert("Copied: " + number + " to clipboard");
        document.getElementById('total-copy').innerText++;
    });
}
