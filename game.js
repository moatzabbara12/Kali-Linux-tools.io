const tools = [
    {
        name: "Nmap",
        category: "network",
        description: "أداة مسح الشبكات الأكثر شيوعاً لاكتشاف الأجهزة والخدمات المفتوحة على الشبكة. تستخدم لتحليل أمان الشبكة وإجراء جرد للأجهزة المتصلة.",
        install: "sudo apt update && sudo apt install nmap",
        usage: "للاستخدام التعليمي فقط على شبكاتك الخاصة أو بإذن صريح"
    },
    {
        name: "Wireshark",
        category: "network",
        description: "محلل بروتوكولات الشبكة الأكثر تقدماً. يسمح بتحليل حركة مرور البيانات وفهم البروتوكولات المختلفة لتشخيص مشاكل الشبكة.",
        install: "sudo apt update && sudo apt install wireshark",
        usage: "لتحليل حركة مرور الشبكة بصلاحيات مناسبة فقط"
    },
    {
        name: "Metasploit Framework",
        category: "network",
        description: "إطار عمل شامل لاختبار الاختراق يوفر مجموعة كبيرة من الأدوات لتقييم أمان الأنظمة وتطوير الاستغلالات بطريقة أخلاقية.",
        install: "curl https://raw.githubusercontent.com/rapid7/metasploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb > msfinstall && chmod 755 msfinstall && ./msfinstall",
        usage: "للاختبار المرخص والبحث الأكاديمي فقط"
    },
    {
        name: "Burp Suite",
        category: "web",
        description: "منصة متكاملة لاختبار أمان تطبيقات الويب. تتضمن أدوات للبروكسي وتحليل الطلبات والاستجابات واكتشاف الثغرات.",
        install: "تحميل من الموقع الرسمي: https://portswigger.net/burp",
        usage: "لاختبار تطبيقات الويب التي تملكها أو بإذن"
    },
    {
        name: "OWASP ZAP",
        category: "web",
        description: "أداة مجانية ومفتوحة المصدر لاختبار أمان تطبيقات الويب. تقدم مسحاً تلقائياً ويدوياً للثغرات الأمنية.",
        install: "sudo apt update && sudo apt install zaproxy",
        usage: "للاختبار الأخلاقي لتطبيقات الويب"
    },
    {
        name: "Nikto",
        category: "web",
        description: "ماسح شامل لخوادم الويب يبحث عن الملفات والبرامج الخطيرة والإعدادات الخاطئة والثغرات المعروفة.",
        install: "sudo apt update && sudo apt install nikto",
        usage: "لفحص خوادم الويب الخاصة بك فقط"
    },
    {
        name: "Aircrack-ng",
        category: "wireless",
        description: "مجموعة أدوات شاملة لتقييم أمان الشبكات اللاسلكية. تتضمن أدوات لمراقبة وتحليل وإختبار شبكات WiFi.",
        install: "sudo apt update && sudo apt install aircrack-ng",
        usage: "لاختبار شبكاتك اللاسلكية الخاصة فقط"
    },
    {
        name: "Hashcat",
        category: "crypto",
        description: "أداة متقدمة لاستعادة كلمات المرور تدعم العديد من خوارزميات التشفير. تستخدم قوة المعالجة المتوازية لتسريع العملية.",
        install: "sudo apt update && sudo apt install hashcat",
        usage: "لاستعادة كلمات المرور الخاصة بك فقط"
    },
    {
        name: "John the Ripper",
        category: "crypto",
        description: "أداة كسر كلمات المرور السريعة التي تدعم مئات أنواع التشفير المختلفة. مفيدة لاختبار قوة كلمات المرور.",
        install: "sudo apt update && sudo apt install john",
        usage: "لاختبار قوة كلمات المرور الخاصة بك"
    },
    {
        name: "Autopsy",
        category: "forensics",
        description: "منصة الطب الشرعي الرقمي مفتوحة المصدر لتحليل الأدلة الرقمية من أجهزة الكمبيوتر والهواتف المحمولة.",
        install: "تحميل من الموقع الرسمي: https://www.autopsy.com/",
        usage: "للتحليل الجنائي المرخص للأدلة الرقمية"
    },
    {
        name: "Volatility",
        category: "forensics",
        description: "إطار عمل متقدم لتحليل ذاكرة الأنظمة. يسمح بفحص واستخراج المعلومات من صور ذاكرة الأنظمة المختلفة.",
        install: "pip3 install volatility3",
        usage: "لتحليل الذاكرة في التحقيقات المرخصة"
    },
    {
        name: "Hydra",
        category: "network",
        description: "أداة سريعة ومرنة لاختبار كلمات المرور عبر بروتوكولات الشبكة المختلفة. تدعم أكثر من 50 بروتوكولاً.",
        install: "sudo apt update && sudo apt install hydra",
        usage: "لاختبار قوة المصادقة في أنظمتك فقط"
    },
    {
        name: "SQLmap",
        category: "web",
        description: "أداة تلقائية لاكتشاف واستغلال ثغرات حقن SQL في قواعد البيانات. تدعم العديد من أنواع قواعد البيانات.",
        install: "sudo apt update && sudo apt install sqlmap",
        usage: "لاختبار تطبيقاتك الخاصة فقط"
    },
    {
        name: "Binwalk",
        category: "analysis",
        description: "أداة تحليل وفحص الملفات الثنائية لاستخراج المعلومات والملفات المدمجة. مفيدة في تحليل البرامج الثابتة.",
        install: "sudo apt update && sudo apt install binwalk",
        usage: "لتحليل الملفات والبرامج الثابتة بصلاحية"
    },
    {
        name: "Steghide",
        category: "forensics",
        description: "أداة لإخفاء واستخراج البيانات من ملفات الصور والصوت. تستخدم في إخفاء المعلومات (steganography).",
        install: "sudo apt update && sudo apt install steghide",
        usage: "للأغراض التعليمية وحماية البيانات"
    },
    {
        name: "Gobuster",
        category: "web",
        description: "أداة سريعة لاكتشاف المجلدات والملفات المخفية في مواقع الويب باستخدام القوة الغاشمة مع قوائم كلمات مخصصة.",
        install: "sudo apt update && sudo apt install gobuster",
        usage: "لفحص مواقعك الخاصة فقط"
    }
];

function createToolCard(tool) {
    return `
        <div class="tool-card" data-category="${tool.category}">
            <div class="tool-name">${tool.name}</div>
            <div class="tool-category">${getCategoryName(tool.category)}</div>
            <div class="tool-description">${tool.description}</div>
            <div class="install-section">
                <div class="install-title">🔧 طريقة التثبيت:</div>
                <div class="install-command">${tool.install}</div>
            </div>
            <div class="usage-note">
                <strong>ملاحظة هامة:</strong> ${tool.usage}
            </div>
        </div>
    `;
}

function getCategoryName(category) {
    const categories = {
        'network': 'شبكات',
        'web': 'تطبيقات ويب',
        'forensics': 'الطب الشرعي الرقمي',
        'wireless': 'شبكات لاسلكية',
        'crypto': 'التشفير',
        'analysis': 'تحليل وثائق'
    };
    return categories[category] || category;
}

function renderTools(toolsToRender = tools) {
    const toolsGrid = document.getElementById('toolsGrid');
    toolsGrid.innerHTML = toolsToRender.map(createToolCard).join('');
}

function filterTools(category) {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        renderTools();
    } else {
        const filteredTools = tools.filter(tool => tool.category === category);
        renderTools(filteredTools);
    }
}

function searchTools() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredTools = tools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm) ||
        tool.description.toLowerCase().includes(searchTerm) ||
        getCategoryName(tool.category).toLowerCase().includes(searchTerm)
    );
    renderTools(filteredTools);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderTools();
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', searchTools);
});
