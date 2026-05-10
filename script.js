document.addEventListener('DOMContentLoaded', () => {
    // تشغيل العداد
    if (typeof updateTimer === "function") updateTimer();

    // إظهار الرسالة المخصصة
    const modal = document.getElementById("customAlert");
    const msgElement = document.getElementById("alertMsg");
    
    const message = "ازيك يا شهد عاملة ايه.. انا عارف ان النهاردة مكانش احسن حاجة بس حاولت احسن مودك بالموقع ده. الموقع ده انا عامله مخصوص عشان اوثق فيه كل ذكرياتنا اللي فاتت واللي جاية.. افتكري دايما لو كله جيه عليكي ياروحي انا جمبك في اي وقت وكل وقت، عارفة عامله مخصوص عشان تقديرك للذكريات يار وحي.";

    setTimeout(() => {
        msgElement.innerText = message;
        modal.style.display = "block";
    }, 1000);
});

// دالة قفل الرسالة
function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
}
function revealSecret() {
    const content = document.getElementById('secretContent');
    const prompt = document.getElementById('clickPrompt');
    const card = document.getElementById('caveCard');

    content.classList.toggle('revealed');

    if (content.classList.contains('revealed')) {
        prompt.style.display = 'none';
        card.style.transform = 'scale(1.02)';
    } else {
        prompt.style.display = 'block';
        card.style.transform = 'scale(1)';
    }
}function startFriendshipTimer() {
    // تاريخ البداية: 16 مارس 2023
    const startDate = new Date('March 16, 2023 00:00:00').getTime();

    setInterval(function() {
        const now = new Date().getTime();
        const distance = now - startDate;

        // حسابات الأيام والساعات والدقائق والثواني
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // عرض النتائج في الصفحة
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }, 1000); // تحديث كل ثانية
}

// تشغيل العداد أول ما الصفحة تحمل
window.onload = function() {
    startFriendshipTimer();
};
let attempts = 0; // عداد المحاولات

function checkVault() {
    const passInput = document.getElementById("vaultPass").value;
    const lockScreen = document.getElementById("lock-screen");
    const vaultContent = document.getElementById("vault-content");

    const correctPass = "23112008"; // تاريخ أول يوم

    if (passInput === correctPass) {
        lockScreen.style.display = "none";
        vaultContent.style.display = "block";
        alert("أهلاً بيكي في ركننا الهادئ.. 🤍");
    } else {
        attempts++; // زود محاولة غلط
        
        if (attempts >= 3) {
            alert("شكلك مش شهد.. اطلعي بره يا هكر! ✋😂");
            // حركة صايعة: ممكن نقفل الإدخال تماماً لمدة 10 ثواني كعقاب
            document.getElementById("vaultPass").disabled = true;
            setTimeout(() => {
                document.getElementById("vaultPass").disabled = false;
                attempts = 0;
                alert("خلاص فكينا الحظر، حاولي تاني بس ركزي!");
            }, 10000); 
        } else {
            alert("كلمة السر غلط.. فاضلك " + (3 - attempts) + " محاولات يا قمورة!");
        }
    }
}
function spreadLove() {
    const container = document.getElementById('heart-container');
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = "❤️";
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        heart.style.animation = `floatHeart ${Math.random() * 2 + 3}s linear forwards`;
        
        container.appendChild(heart);
        
        // مسح القلب بعد ما يخلص الحركة عشان ميتعبش المتصفح
        setTimeout(() => { heart.remove(); }, 5000);
    }
