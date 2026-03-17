
/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   DATA & STORAGE
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const DEFS = {
  profile:{name:"Ashish Cherian",role:"Full Stack Developer",greeting:"Hello, It's Me ðŸ‘‹",tagline:"Building reliable apps with modern design.",typingRoles:"Full Stack Developer,Android Developer,ML Engineer,UI/UX Enthusiast",btnPrimary:"Hire Me",btnSecondary:"Download CV",desc:"Passionate about building innovative web and Android applications. Currently pursuing B.E. in Computer Science at KIT, Tiptur with a CGPA of 8.15.",bio:"I'm Ashish Cherian, a final-year Computer Science and Engineering student at KIT, Tiptur. I love building things â€” from web apps to Android applications. With skills in React, Node.js, Android Jetpack Compose, and Machine Learning, I'm ready for real-world challenges.",location:"Tiptur, Karnataka",cgpa:"8.15",year:"2026",projects:"5+",certs:"4+",email:"ashishcherian15@gmail.com",phone:"+91 9535570326",college:"KIT, Tiptur",status:"Available",avatar:null,aboutSub:"Passionate CSE student and developer based in Karnataka, India.",navBrand:"AC"},
  education:[
    {id:1,icon:"ðŸŽ“",degree:"B.E. in Computer Science & Engineering",inst:"KIT - K.I.T. College of Engineering, Tiptur",year:"2022 â€“ 2026",grade:"CGPA: 8.15"},
    {id:2,icon:"ðŸ“š",degree:"Pre-University (PCMC)",inst:"Canara PU College",year:"2020 â€“ 2022",grade:"91.5%"},
    {id:3,icon:"ðŸ«",degree:"SSLC â€“ Secondary Education",inst:"",year:"2019 â€“ 2020",grade:"92%"}
  ],
  skills:[
    {id:1,category:"Frontend",icon:"âš›ï¸",name:"React.js"},{id:2,category:"Frontend",icon:"ðŸŒ",name:"HTML / CSS"},{id:3,category:"Frontend",icon:"ðŸŽ¨",name:"JavaScript"},
    {id:4,category:"Backend",icon:"ðŸŸ¢",name:"Node.js"},{id:5,category:"Backend",icon:"ðŸƒ",name:"MongoDB"},
    {id:6,category:"Languages",icon:"â˜•",name:"Java"},{id:7,category:"Languages",icon:"ðŸ",name:"Python"},{id:8,category:"Languages",icon:"âš™ï¸",name:"C"},
    {id:9,category:"Mobile",icon:"ðŸ“±",name:"Android (Jetpack Compose)"},
    {id:10,category:"ML / AI",icon:"ðŸ¤–",name:"Machine Learning"},{id:11,category:"ML / AI",icon:"ðŸ“Š",name:"Scikit-Learn"},
    {id:12,category:"Tools",icon:"ðŸ”§",name:"Git & GitHub"},{id:13,category:"Tools",icon:"ðŸ’»",name:"VS Code"},{id:14,category:"Tools",icon:"ðŸš€",name:"Vercel"}
  ],
  projects:[
    {id:1,name:"Pharmacy Management System",desc:"Full-stack web app for pharmacy inventory, billing, and patient records with role-based access.",tags:["React","Node.js","MongoDB"],github:"https://github.com/AshishCherian15",demo:"",media:null,mediaType:null},
    {id:2,name:"Voice Changer App",desc:"Android app that modifies voice pitch in real-time using audio processing algorithms.",tags:["Android","Java","Audio API"],github:"https://github.com/AshishCherian15",demo:"",media:null,mediaType:null},
    {id:3,name:"Movie Recommender System",desc:"Content-based recommendation using TF-IDF vectorization and cosine similarity.",tags:["Python","Scikit-Learn","TF-IDF"],github:"https://github.com/AshishCherian15",demo:"",media:null,mediaType:null},
    {id:4,name:"SnipFlow",desc:"Android app with Jetpack Compose frontend for managing code snippets.",tags:["Android","Jetpack Compose","Kotlin"],github:"https://github.com/AshishCherian15",demo:"",media:null,mediaType:null}
  ],
  experience:[{id:1,role:"Web Development Intern",company:"",period:"2024",type:"Internship",desc:"Worked on front-end development using React.js and built responsive UI components."}],
  certificates:[
    {id:1,name:"Programming in Java",issuer:"IIT Kharagpur (NPTEL)",date:"2024",link:"",liLink:"",media:null,mediaType:null},
    {id:2,name:"The Complete Web Developer Bootcamp",issuer:"Udemy",date:"2023",link:"",liLink:"",media:null,mediaType:null},
    {id:3,name:"Machine Learning Specialization",issuer:"Udemy",date:"2024",link:"",liLink:"",media:null,mediaType:null},
    {id:4,name:"Android Development",issuer:"Udemy",date:"2024",link:"",liLink:"",media:null,mediaType:null}
  ],
  gallery:[],
  activities:[],
  languages:[
    {id:1,flag:"ðŸ‡¬ðŸ‡§",name:"English",level:"Professional"},{id:2,flag:"ðŸ‡®ðŸ‡³",name:"Kannada",level:"Native"},
    {id:3,flag:"ðŸ‡®ðŸ‡³",name:"Hindi",level:"Conversational"},{id:4,flag:"ðŸ‡®ðŸ‡³",name:"Malayalam",level:"Native"},
    {id:5,flag:"ðŸ‡®ðŸ‡³",name:"Tulu",level:"Native"}
  ],
  hobbies:[{id:1,icon:"ðŸŽ®",name:"Gaming"},{id:2,icon:"ðŸŽµ",name:"Music"},{id:3,icon:"ðŸ“–",name:"Reading"},{id:4,icon:"ðŸ‹ï¸",name:"Fitness & Workout"},{id:5,icon:"ðŸŒ",name:"Travelling"},{id:6,icon:"ðŸ•",name:"Cooking"}],
  blog:[],
  contact:{email:"ashishcherian15@gmail.com",phone:"+91 9535570326",location:"Tiptur, Karnataka, India",website:""},
  social:[
    {id:1,name:"LinkedIn",handle:"Ashish Cherian",url:"https://www.linkedin.com/in/ashish-cherian-158b49356",icon:"fab fa-linkedin",color:"#0077b5"},
    {id:2,name:"GitHub",handle:"AshishCherian15",url:"https://github.com/AshishCherian15",icon:"fab fa-github",color:"#7c5cbf"},
    {id:3,name:"Instagram",handle:"ash_ashish_1_5",url:"https://www.instagram.com/ash_ashish_1_5",icon:"fab fa-instagram",color:"#e1306c"},
    {id:4,name:"WhatsApp",handle:"+91 9535570326",url:"https://wa.me/919535570326",icon:"fab fa-whatsapp",color:"#25d366"}
  ],
  visibility:{hero:true,about:true,education:true,skills:true,projects:true,experience:true,certificates:true,gallery:true,activities:true,languages:true,hobbies:true,blog:true,contact:true},
  resume:{url:"",dataUrl:null,name:"",lastUpdated:""},
  github:{user:"",repo:"",token:"",branch:"main",ghUser2:""},
  maintenance:{enabled:false,message:"I'm currently updating my portfolio with new projects. Back shortly!",logo:"AC."}
};

let D = JSON.parse(JSON.stringify(DEFS));
let _eid = null, _etyp = null;
const _busyLocks = new Set();

function acquireLock(key){
  if(_busyLocks.has(key)) return false;
  _busyLocks.add(key);
  return true;
}
function releaseLock(key){ _busyLocks.delete(key); }
function setBusyState(el, isBusy, busyText='Working...'){
  if(!el) return;
  if(isBusy){
    if(!el.dataset.prevHtml) el.dataset.prevHtml = el.innerHTML;
    el.disabled = true;
    el.classList.add('is-busy');
    el.innerHTML = busyText;
  } else {
    el.disabled = false;
    el.classList.remove('is-busy');
    if(el.dataset.prevHtml){
      el.innerHTML = el.dataset.prevHtml;
      delete el.dataset.prevHtml;
    }
  }
}
function findTriggerButton(){
  const ae = document.activeElement;
  if(ae && ae.tagName === 'BUTTON') return ae;
  return null;
}
function setButtonsBusy(selector, isBusy){
  document.querySelectorAll(selector).forEach(btn=>{
    btn.disabled = !!isBusy;
    btn.classList.toggle('is-busy', !!isBusy);
  });
}

function esc(v){
  return String(v ?? '')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}

function safeUrl(url){
  if(!url) return '';
  try {
    const parsed = new URL(url, window.location.origin);
    const protocol = parsed.protocol.toLowerCase();
    if(protocol === 'http:' || protocol === 'https:' || protocol === 'mailto:' || protocol === 'tel:') return parsed.href;
  } catch(_) {}
  return '';
}

function openSafeUrl(url){
  const safe = safeUrl(url);
  if(!safe) return;
  window.open(safe, '_blank', 'noopener,noreferrer');
}

function safeMediaSrc(src){
  if(!src) return '';
  const raw = String(src).trim();
  if(/^data:(image|video)\//i.test(raw) || /^data:application\/pdf/i.test(raw) || /^blob:/i.test(raw)) return raw;
  return safeUrl(raw);
}

function inferMediaType(src, explicitType){
  if(explicitType==='image' || explicitType==='video' || explicitType==='pdf') return explicitType;
  const raw = String(src||'').trim().toLowerCase();
  const plain = raw.split('?')[0].split('#')[0];
  if(raw.startsWith('data:application/pdf') || plain.endsWith('.pdf')) return 'pdf';
  if(raw.startsWith('data:video/') || /\.(mp4|webm|ogg|mov|m4v|avi|mkv)$/i.test(plain)) return 'video';
  return 'image';
}

function normalizeMediaData(){
  ['projects','certificates','gallery'].forEach(key=>{
    D[key] = (D[key]||[]).map(item=>{
      if(!item || !item.media) return item;
      return { ...item, mediaType: inferMediaType(item.media, item.mediaType) };
    });
  });
}

function safeRender(label, fn){
  try { fn(); }
  catch (err){ console.error(`Render failed: ${label}`, err); }
}

function deepMerge(target, source){
  for(const key in source){
    if(source[key]&&typeof source[key]==='object'&&!Array.isArray(source[key])&&target[key]&&typeof target[key]==='object'){
      deepMerge(target[key], source[key]);
    } else { target[key] = source[key]; }
  }
  return target;
}

async function loadData(){
  try {
    const { data, error } = await _supa.from('portfolio').select('data').eq('id', 1).single();
    if(error) throw error;
    if(data?.data) D = deepMerge(JSON.parse(JSON.stringify(DEFS)), data.data);
    normalizeMediaData();
  } catch(e){
    console.warn('Supabase load failed, using defaults:', e);
    D = JSON.parse(JSON.stringify(DEFS));
  }
}

async function saveData(silent){
  try {
    const { error } = await _supa.from('portfolio').upsert({id:1, data:D});
    if(error) throw error;
    const adminOpen = document.getElementById('adminPanel')?.classList.contains('on');
    if(!adminOpen){
      renderAll();
      setTimeout(()=>{ reobserve(); }, 80);
    }
    if(!silent) showToast('Saved!','success');
    return true;
  } catch(e){
    showToast('Save failed: '+e.message,'error');
    return false;
  }
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   MAINTENANCE
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function checkMaintenance(){
  const m = D.maintenance||{};
  const ms = document.getElementById('maintenanceScreen');
  const adminOpen = document.getElementById('adminPanel')?.classList.contains('on');
  if(m.enabled && !adminOpen){
    ms.classList.add('active');
    document.getElementById('maintMsg').textContent = m.message||DEFS.maintenance.message;
    document.getElementById('maintLogo').textContent = m.logo||'AC.';
  } else {
    ms.classList.remove('active');
  }
}
async function toggleMaint(val){
  if(!acquireLock('maint-toggle')) return;
  const toggle = document.getElementById('maintToggle');
  if(toggle) toggle.disabled = true;
  D.maintenance.enabled = val;
  await saveData(true);
  checkMaintenance();
  showToast(val?"Maintenance mode ON":"Maintenance mode OFF", val?"info":"success");
  if(toggle) toggle.disabled = false;
  releaseLock('maint-toggle');
}
async function saveMaintSettings(){
  if(!acquireLock('maint-save')) return;
  const btn = findTriggerButton();
  setBusyState(btn, true, 'Saving...');
  D.maintenance.message = document.getElementById('maintMsgInput').value;
  D.maintenance.logo = document.getElementById('maintLogoInput').value;
  await saveData(true);
  document.getElementById('maintMsg').textContent = D.maintenance.message;
  document.getElementById('maintLogo').textContent = D.maintenance.logo||'AC.';
  showToast("Maintenance settings saved!","success");
  setBusyState(btn, false);
  releaseLock('maint-save');
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   RENDER PUBLIC
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function renderAll(){
  safeRender('nav', renderNav);
  safeRender('hero', renderHero);
  safeRender('about', renderAbout);
  safeRender('education', renderEdu);
  safeRender('skills', renderSkills);
  safeRender('projects', renderProj);
  safeRender('experience', renderExp);
  safeRender('certificates', renderCerts);
  safeRender('gallery', renderGallery);
  safeRender('activities', renderActivities);
  safeRender('languages', renderLangs);
  safeRender('hobbies', renderHobbies);
  safeRender('blog', renderBlog);
  safeRender('contact', renderContact);
  safeRender('social', renderSocial);
  applyVis();
}

function renderNav(){
  const navs=[['hero','Home'],['about','About'],['education','Edu'],['skills','Skills'],['projects','Projects'],['experience','Work'],['certificates','Certs'],['activities','Activities'],['contact','Contact']];
  document.getElementById('navLinks').innerHTML=navs.map(([id,l])=>`<li><a href="#${id}" onclick="scrollTo2('${id}');closeMobileNav();return false">${esc(l)}</a></li>`).join('');
  updateNavState();
}

function renderHero(){
  const p=D.profile;
  const avEl=document.getElementById('heroAv');
  if(p.avatar){ avEl.innerHTML=`<img src="${safeUrl(p.avatar)}" alt="${esc(p.name)}" style="width:100%;height:100%;object-fit:cover;object-position:top">`; }
  else { avEl.innerHTML=`<span class="hex-default">ðŸ§‘â€ðŸ’»</span>`; }
  const admAv=document.getElementById('admAv');
  if(admAv){ admAv.innerHTML=p.avatar?`<img src="${safeUrl(p.avatar)}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`:`<span style="font-size:36px">ðŸ§‘â€ðŸ’»</span>`; }
  document.getElementById('heroGreeting').textContent=p.greeting||"Hello, It's Me ðŸ‘‹";
  document.getElementById('heroName').textContent=p.name||'Ashish Cherian';
  document.getElementById('heroRole').textContent=p.role||'Full Stack Developer';
  document.getElementById('heroTagline').textContent=p.tagline||'Building reliable apps with modern design.';
  const bp=document.getElementById('heroBtnPrimary');
  const bs=document.getElementById('heroBtnSecondary');
  if(bp) bp.innerHTML=`<i class="fas fa-paper-plane"></i> ${esc(p.btnPrimary||'Hire Me')}`;
  if(bs) bs.innerHTML=`<i class="fas fa-download"></i> ${esc(p.btnSecondary||'Download CV')}`;
  const badges={Available:'âœ… Available',Busy:'ðŸ”´ Busy',Open:'ðŸŸ¡ Open'};
  document.getElementById('heroBadge').textContent=badges[p.status]||'âœ… Available';
  document.getElementById('heroSocials').innerHTML=(D.social||[]).map(s=>{
    const url = safeUrl(s.url);
    if(!url) return '';
    return `<a class="hero-soc" href="${url}" target="_blank" rel="noopener noreferrer" title="${esc(s.name)}" style="color:${esc(s.color)};border-color:${esc(s.color)}33"><i class="${esc(s.icon)}"></i></a>`;
  }).join('');
  document.title=(p.name||'Ashish Cherian')+' | Portfolio';
  if(window._restartTyping) window._restartTyping();
}

function renderAbout(){
  const p=D.profile;
  document.getElementById('aboutBio').textContent=p.bio||'';
  document.getElementById('aboutSub').textContent=p.aboutSub||'';
  document.getElementById('stCGPA').textContent=p.cgpa||'8.15';
  document.getElementById('stProj').textContent=p.projects||'5+';
  document.getElementById('stCert').textContent=p.certs||'4+';
  document.getElementById('stYear').textContent=p.year||'2026';
  const rows=[];
  if(p.email){
    const mail = safeUrl(`mailto:${p.email}`);
    rows.push(dr('fa-envelope','Email', mail ? `<a href="${mail}" style="color:var(--cyan)">${esc(p.email)}</a>` : esc(p.email)));
  }
  if(p.phone) rows.push(dr('fa-phone','Phone',esc(p.phone)));
  if(p.location) rows.push(dr('fa-map-marker-alt','Location',esc(p.location)));
  if(p.college) rows.push(dr('fa-university','College',esc(p.college)));
  if(p.cgpa) rows.push(dr('fa-star','CGPA',esc(p.cgpa)));
  document.getElementById('aboutCard').innerHTML=rows.join('');
}
function dr(ico,label,val){return`<div class="det-row"><div class="det-ico"><i class="fas ${esc(ico)}"></i></div><div><div class="det-label">${esc(label)}</div><div class="det-val">${val}</div></div></div>`;}

function renderEdu(){
  document.getElementById('eduList').innerHTML=(D.education||[]).map(e=>`
    <div class="edu-card reveal">
      <div class="edu-ico">${e.icon||'ðŸŽ“'}</div>
      <div style="flex:1">
        <div class="edu-deg">${e.degree}</div>
        <div class="edu-inst">${e.inst||''}</div>
        <div class="edu-meta">
          <span style="color:var(--text2);font-size:14px">${e.year||''}</span>
          <span class="chip">${e.grade||''}</span>
        </div>
      </div>
    </div>`).join('');
}

function renderSkills(){
  const cats=[...new Set((D.skills||[]).map(s=>s.category))];
  document.getElementById('skillsGrid').innerHTML=cats.map(cat=>`
    <div class="skill-cat-card reveal">
      <div class="skill-cat-label">${cat}</div>
      <div class="skill-tags">${(D.skills||[]).filter(s=>s.category===cat).map(s=>`<span class="skill-pill">${s.icon||''} ${s.name}</span>`).join('')}</div>
    </div>`).join('');
}

function renderProj(){
  document.getElementById('projGrid').innerHTML=(D.projects||[]).map(p=>`
    <div class="proj-card reveal">
      <div class="proj-thumb">${p.media?mediaTag(p.media,inferMediaType(p.media,p.mediaType),'width:100%;height:100%;object-fit:cover'):`<div class="proj-thumb-ico">ðŸ’»</div>`}</div>
      <div class="proj-body">
        <div class="proj-name">${p.name}</div>
        <div class="proj-desc">${p.desc||''}</div>
        <div class="proj-chips">${(p.tags||[]).map(t=>`<span class="proj-chip">${t}</span>`).join('')}</div>
        <div class="proj-footer">
          <div class="proj-links">
            ${p.github?`<a class="proj-link" href="${p.github}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>`:''}
            ${p.demo?`<a class="proj-link" href="${p.demo}" target="_blank" title="Demo"><i class="fas fa-external-link-alt"></i></a>`:''}
          </div>
        </div>
      </div>
    </div>`).join('');
}

function renderExp(){
  document.getElementById('expList').innerHTML=(D.experience||[]).map(e=>`
    <div class="exp-card reveal">
      <div class="exp-role">${e.role}</div>
      ${e.company?`<div class="exp-co">${e.company}</div>`:''}
      <div class="exp-meta">
        ${e.period?`<span><i class="far fa-calendar"></i>${e.period}</span>`:''}
        ${e.type?`<span class="chip">${e.type}</span>`:''}
      </div>
      <div class="exp-desc">${e.desc||''}</div>
    </div>`).join('');
}

function renderCerts(){
  document.getElementById('certGrid').innerHTML=(D.certificates||[]).map(c=>{
    const hasMedia=c.media&&c.media.length>10;
    const type=inferMediaType(c.media,c.mediaType);
    return `
    <div class="cert-card reveal" onclick="viewCert(${c.id})">
      <div class="cert-thumb">
        ${hasMedia?mediaTag(c.media,type,'width:100%;height:100%;object-fit:cover'):`<div class="cert-thumb-ico">ðŸ†</div>`}
        <div class="cert-view-overlay"><i class="fas fa-expand"></i></div>
      </div>
      <div class="cert-body">
        <div class="cert-name">${c.name}</div>
        <div class="cert-iss">${c.issuer||''}</div>
        <div class="cert-date">${c.date||''}</div>
        <div class="cert-footer">
          ${c.link?`<a class="cert-link-btn" href="${c.link}" target="_blank" onclick="event.stopPropagation()"><i class="fas fa-external-link-alt"></i> View</a>`:''}
          ${c.liLink?`<a class="cert-link-btn linkedin" href="${c.liLink}" target="_blank" onclick="event.stopPropagation()"><i class="fab fa-linkedin"></i> LinkedIn</a>`:''}
        </div>
      </div>
    </div>`;
  }).join('');
}
function viewCert(id){
  const c=(D.certificates||[]).find(x=>x.id===id);
  if(!c) return;
  if(c.media&&c.media.length>10){
    openLB(c.media, inferMediaType(c.media,c.mediaType));
  } else if(c.link){
    openSafeUrl(c.link);
  } else if(c.liLink){
    openSafeUrl(c.liLink);
  } else {
    showToast("No media or link for this certificate.","info");
  }
}

function renderGallery(){
  const items=D.gallery||[];
  document.getElementById('galGrid').innerHTML=items.length?items.map(g=>`
    <div class="gal-item reveal" onclick="openLB('${g.media}', '${inferMediaType(g.media,g.mediaType)}')">
      ${g.media&&g.media.length>10?mediaTag(g.media,inferMediaType(g.media,g.mediaType),'width:100%;height:100%;object-fit:cover'):`<div class="gal-placeholder">ðŸ–¼ï¸</div>`}
      <div class="gal-overlay"><i class="fas fa-expand"></i>${g.caption?`<span class="gal-cap">${g.caption}</span>`:''}</div>
    </div>`).join(''):`<p style="color:var(--text3)">No gallery items yet.</p>`;
}

function renderActivities(){
  const ghUser=D.github?.ghUser2||'';
  const wrap=document.getElementById('ghContribWrap');
  if(ghUser){
    wrap.style.display='block';
    document.getElementById('ghContribImg').src=`https://ghchart.rshah.org/00e5c8/${ghUser}`;
  } else { wrap.style.display='none'; }
  const items=D.activities||[];
  document.getElementById('actGrid').innerHTML=items.length?items.map(a=>`
    <a class="act-card reveal" href="${a.url||'#'}" target="${a.url?'_blank':'_self'}">
      <div class="act-header">
        <div class="act-type-ico ${a.type||'github'}">
          <i class="${a.type==='linkedin'?'fab fa-linkedin':'fab fa-github'}"></i>
        </div>
        <div>
          <div class="act-type-label">${a.type==='linkedin'?'LinkedIn Post':'GitHub Repository'}</div>
          ${a.date?`<div style="color:var(--text3);font-size:12px">${a.date}</div>`:''}
        </div>
      </div>
      <div class="act-title">${a.title||''}</div>
      <div class="act-desc">${a.desc||''}</div>
      <div class="act-meta">
        ${a.stars?`<span><i class="fas fa-star" style="color:var(--yellow)"></i>${a.stars} stars</span>`:''}
        ${a.lang?`<span><i class="fas fa-circle" style="font-size:8px;color:var(--cyan)"></i>${a.lang}</span>`:''}
        ${a.likes?`<span><i class="fas fa-heart" style="color:var(--pink)"></i>${a.likes} likes</span>`:''}
      </div>
      ${a.url?`<div class="act-link"><i class="fas fa-external-link-alt"></i> View ${a.type==='linkedin'?'Post':'Repository'}</div>`:''}
    </a>`).join(''):`<p style="color:var(--text3)">No activities added yet. Add from admin!</p>`;
}

function renderLangs(){
  document.getElementById('langGrid').innerHTML=(D.languages||[]).map(l=>`
    <div class="lang-card reveal">
      <span class="lang-flag">${l.flag||'ðŸŒ'}</span>
      <div><div class="lang-name">${l.name}</div><div class="lang-lvl">${l.level||''}</div></div>
    </div>`).join('');
}
function renderHobbies(){
  document.getElementById('hobbyWrap').innerHTML=(D.hobbies||[]).map(h=>`<div class="hobby-pill">${h.icon||'â­'} ${h.name}</div>`).join('');
}
function renderBlog(){
  const items=D.blog||[];
  document.getElementById('blogGrid').innerHTML=items.length?items.map(b=>`
    <a class="blog-card reveal" href="${b.url||'#'}" target="${b.url?'_blank':'_self'}">
      <div class="blog-body">
        <div class="blog-pill">${b.tag||'Tech'}</div>
        <div class="blog-meta"><span>${b.date||''}</span><span>${b.readTime||'3 min read'}</span></div>
        <div class="blog-title">${b.title||''}</div>
        <div class="blog-exc">${b.excerpt||''}</div>
      </div>
    </a>`).join(''):`<p style="color:var(--text3)">No blog posts yet.</p>`;
}
function renderContact(){
  const c=D.contact||{},p=D.profile||{};
  const e=c.email||p.email||'',ph=c.phone||p.phone||'',l=c.location||p.location||'',w=c.website||'';
  document.getElementById('contactCards').innerHTML=`
    ${e?`<a class="contact-card" href="mailto:${e}"><div class="contact-ico" style="background:rgba(0,229,200,.08);color:var(--cyan)"><i class="fas fa-envelope"></i></div><div><div class="contact-label">Email</div><div class="contact-val">${e}</div></div></a>`:''}
    ${ph?`<a class="contact-card" href="tel:${ph}"><div class="contact-ico" style="background:rgba(0,229,200,.08);color:var(--cyan)"><i class="fas fa-phone"></i></div><div><div class="contact-label">Phone</div><div class="contact-val">${ph}</div></div></a>`:''}
    ${l?`<div class="contact-card"><div class="contact-ico" style="background:rgba(139,92,246,.08);color:var(--purple)"><i class="fas fa-map-marker-alt"></i></div><div><div class="contact-label">Location</div><div class="contact-val">${l}</div></div></div>`:''}
    ${w?`<a class="contact-card" href="${w}" target="_blank"><div class="contact-ico" style="background:rgba(245,158,11,.08);color:var(--yellow)"><i class="fas fa-globe"></i></div><div><div class="contact-label">Website</div><div class="contact-val">${w}</div></div></a>`:''}`;
}
function renderSocial(){
  document.getElementById('socGrid').innerHTML=(D.social||[]).map(s=>`
    <a class="soc-card" href="${s.url}" target="_blank" style="border-color:${s.color}33">
      <div class="soc-ico" style="background:${s.color}15;color:${s.color}"><i class="${s.icon}"></i></div>
      <div style="overflow:hidden"><div class="soc-name">${s.name}</div><div class="soc-handle">${s.handle||''}</div></div>
    </a>`).join('');
}
function applyVis(){
  const v=D.visibility||{};
  ['hero','about','education','skills','projects','experience','certificates','gallery','activities','languages','hobbies','blog','contact'].forEach(k=>{
    const el=document.getElementById(k);
    if(el) el.classList.toggle('sec-hidden',v[k]===false);
  });
}

/* UTILITY */
function mediaTag(src,type,style=''){
  if(!src||src.length<10) return '<div class="proj-thumb-ico">ðŸ’»</div>';
  const mediaSrc = safeMediaSrc(src);
  if(!mediaSrc) return '<div class="proj-thumb-ico">âš ï¸</div>';
  const kind = inferMediaType(mediaSrc, type);
  const styleText = style || '';
  const s=styleText?` style="${styleText}"`:'';
  if(kind==='video') return `<div class="media-frame"${s}><video autoplay muted loop playsinline onerror="handleMediaError(this, 'video')"><source src="${mediaSrc}"></video><div class="media-fallback" style="display:none"><span>🎬</span><small>Video unavailable</small></div></div>`;
  if(kind==='pdf') return `<div class="media-frame"${s}><div class="media-fallback" style="display:flex"><span>📄</span><small>PDF preview</small></div></div>`;
  return `<div class="media-frame"${s}><img src="${mediaSrc}" alt="" loading="lazy" onerror="handleMediaError(this, 'image')"><div class="media-fallback" style="display:none"><span>🖼️</span><small>Image unavailable</small></div></div>`;
}
function handleMediaError(el){
  if(!el) return;
  const frame = el.closest('.media-frame');
  const fallback = frame?.querySelector('.media-fallback');
  el.style.display='none';
  if(fallback) fallback.style.display='flex';
}
window.handleMediaError = handleMediaError;

function setActiveNav(id){
  document.querySelectorAll('#navLinks a').forEach(a=>a.classList.remove('active'));
  if(!id) return;
  const link = document.querySelector(`#navLinks a[href="#${id}"]`);
  if(link) link.classList.add('active');
}

function updateNavState(){
  const nav = document.getElementById('nav');
  if(!nav) return;
  nav.classList.toggle('nav-scrolled', window.scrollY > 18);

  const secs=['hero','about','education','skills','projects','experience','certificates','activities','contact'];
  let cur='hero';
  secs.forEach(id=>{
    const el=document.getElementById(id);
    if(!el || el.classList.contains('sec-hidden')) return;
    if(window.scrollY >= el.offsetTop - 96) cur=id;
  });
  setActiveNav(cur);
}

function scrollTo2(id){
  const el=document.getElementById(id);
  if(!el) return;
  const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - 74);
  window.scrollTo({top, behavior:'smooth'});
  setActiveNav(id);
}
function toggleMobileNav(){ document.getElementById('navLinks').classList.toggle('mobile-open'); }
function closeMobileNav(){ document.getElementById('navLinks').classList.remove('mobile-open'); }

/* REVEAL */
function initReveal(){
  const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');ob.unobserve(e.target);}}),{threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>ob.observe(el));
}
function reobserve(){
  const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');ob.unobserve(e.target);}}),{threshold:.08});
  document.querySelectorAll('.reveal:not(.in)').forEach(el=>ob.observe(el));
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   LIGHTBOX
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function openLB(src, type){
  if(!src||src.length<5){showToast("No media to display","error");return;}
  const mediaSrc = safeMediaSrc(src);
  if(!mediaSrc){showToast("Invalid media URL","error");return;}
  const kind = inferMediaType(mediaSrc, type);
  const lb=document.getElementById('lightbox');
  const img=document.getElementById('lightboxImg');
  const vid=document.getElementById('lightboxVideo');
  const pdf=document.getElementById('lightboxPdf');
  img.onerror=null; vid.onerror=null;
  img.src='';
  vid.pause(); vid.removeAttribute('src'); vid.load();
  pdf.src='';
  img.style.display='none'; vid.style.display='none'; pdf.style.display='none';
  if(kind==='video'){
    vid.onerror=()=>{showToast('Video could not be loaded','error'); closeLB();};
    vid.src=mediaSrc; vid.style.display='block';
  }
  else if(kind==='pdf'){
    pdf.src=mediaSrc; pdf.style.display='block';
  }
  else {
    img.onerror=()=>{showToast('Image could not be loaded','error'); closeLB();};
    img.src=mediaSrc; img.style.display='block';
  }
  lb.classList.add('on');
}
function closeLB(){ document.getElementById('lightbox').classList.remove('on'); }
document.getElementById('lightbox').addEventListener('click',e=>{if(e.target===document.getElementById('lightbox'))closeLB();});

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   AUTH
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function showLogin(){
  document.getElementById('lEmail').value='';
  document.getElementById('lPass').value='';
  document.getElementById('loginErr').style.display='none';
  document.getElementById('loginScreen').classList.add('on');
}
function hideLogin(){ document.getElementById('loginScreen').classList.remove('on'); }
async function doLogin(){
  const email=document.getElementById('lEmail').value.trim();
  const pass=document.getElementById('lPass').value;
  const btn=document.getElementById('loginBtn');
  const err=document.getElementById('loginErr');
  err.style.display='none';
  btn.disabled=true; btn.textContent='Signing in...';
  try {
    const { error } = await _supa.auth.signInWithPassword({email, password:pass});
    if(error) throw error;
    hideLogin(); openAdmin();
  } catch(e){
    err.textContent='âŒ '+e.message;
    err.style.display='block';
  } finally {
    btn.disabled=false;
    btn.innerHTML='<i class="fas fa-sign-in-alt"></i> Sign In';
  }
}
document.addEventListener('keydown',e=>{ if(e.key==='Enter'&&document.getElementById('loginScreen').classList.contains('on')) doLogin(); });

async function changePassword(){
  const nw=document.getElementById('newPass').value;
  const cf=document.getElementById('confPass').value;
  const msg=document.getElementById('passMsg');
  if(nw.length<6){msg.style.display='block';msg.style.color='var(--red)';msg.textContent='âŒ New password must be at least 6 characters.';return;}
  if(nw!==cf){msg.style.display='block';msg.style.color='var(--red)';msg.textContent='âŒ Passwords do not match.';return;}
  try {
    const { error } = await _supa.auth.updateUser({password: nw});
    if(error) throw error;
    msg.style.display='block';msg.style.color='var(--cyan)';msg.textContent='âœ… Password changed successfully!';
    document.getElementById('newPass').value='';document.getElementById('confPass').value='';
  } catch(e){
    msg.style.display='block';msg.style.color='var(--red)';msg.textContent='âŒ '+e.message;
  }
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   ADMIN PANEL
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function openAdmin(){
  document.getElementById('adminPanel').classList.add('on');
  document.body.classList.add('admin-active');
  document.getElementById('pubView').style.display='none';
  document.getElementById('nav').style.display='none';
  checkMaintenance();
  fillAdminForms();
  renderAdminAll();
}
function goPreview(){
  document.getElementById('adminPanel').classList.remove('on');
  document.body.classList.remove('admin-active');
  document.getElementById('pubView').style.display='block';
  document.getElementById('nav').style.display='flex';
  checkMaintenance();
  renderAll();
  setTimeout(()=>{ reobserve(); },100);
  window.scrollTo({top:0,behavior:'smooth'});
}
function doLogout(){
  _supa.auth.signOut();
  document.getElementById('adminPanel').classList.remove('on');
  document.body.classList.remove('admin-active');
  document.getElementById('pubView').style.display='block';
  document.getElementById('nav').style.display='flex';
  checkMaintenance();
  renderAll();
}

function showTab(name, btn){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.sb-link').forEach(b=>b.classList.remove('active'));
  const tab=document.getElementById('tab-'+name);
  if(tab) tab.classList.add('active');
  if(btn) btn.classList.add('active');
}

function fillAdminForms(){
  const p=D.profile;
  const sv=(id,val)=>{const el=document.getElementById(id);if(el)el.value=val||'';};
  sv('pName',p.name);sv('pRole',p.role);sv('pTagline',p.tagline);sv('pDesc',p.desc);
  sv('pGreeting',p.greeting);sv('pTypingRoles',p.typingRoles);sv('pBtnPrimary',p.btnPrimary);sv('pBtnSecondary',p.btnSecondary);
  sv('pBio',p.bio);sv('pLocation',p.location);sv('pCGPA',p.cgpa);sv('pYear',p.year);
  sv('pProj',p.projects);sv('pEmail',p.email);sv('pPhone',p.phone);sv('pCollege',p.college);
  document.getElementById('pStatus').value=p.status||'Available';
  const aa=document.getElementById('admAv');
  if(aa) aa.innerHTML=p.avatar?`<img src="${p.avatar}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`:`<span style="font-size:36px">ðŸ§‘â€ðŸ’»</span>`;
  const c=D.contact||{};
  sv('cEmail',c.email||p.email);sv('cPhone',c.phone||p.phone);sv('cLoc',c.location||p.location);sv('cWeb',c.website||'');
  const r=D.resume||{};
  sv('resumeUrl',r.url||'');
  if(r.name) document.getElementById('resumeStatus').textContent='Current: '+r.name+(r.lastUpdated?' ('+r.lastUpdated+')':'');
  if(r.lastUpdated) document.getElementById('resumeLastUpdated').textContent='Last updated: '+r.lastUpdated;
  const secEmail=document.getElementById('secEmail');
  _supa.auth.getUser().then(({data})=>{ if(secEmail) secEmail.textContent=data?.user?.email||'â€”'; });
  const gh=D.github||{};
  sv('ghUser',gh.user);sv('ghRepo',gh.repo);sv('ghBranch',gh.branch||'main');sv('ghUser2',gh.ghUser2||'');
  if(gh.token) document.getElementById('ghToken').value='â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢';
  const m=D.maintenance||{};
  document.getElementById('maintToggle').checked=!!m.enabled;
  sv('maintMsgInput',m.message||DEFS.maintenance.message);
  sv('maintLogoInput',m.logo||'AC.');
}

async function saveProfile(){
  if(!acquireLock('save-profile')) return;
  const btn = findTriggerButton();
  setBusyState(btn, true, 'Saving...');
  D.profile.name=document.getElementById('pName').value;
  D.profile.role=document.getElementById('pRole').value;
  D.profile.greeting=document.getElementById('pGreeting').value;
  D.profile.tagline=document.getElementById('pTagline').value;
  D.profile.typingRoles=document.getElementById('pTypingRoles').value;
  D.profile.btnPrimary=document.getElementById('pBtnPrimary').value;
  D.profile.btnSecondary=document.getElementById('pBtnSecondary').value;
  D.profile.desc=document.getElementById('pDesc').value;
  D.profile.bio=document.getElementById('pBio').value;
  D.profile.location=document.getElementById('pLocation').value;
  D.profile.cgpa=document.getElementById('pCGPA').value;
  D.profile.year=document.getElementById('pYear').value;
  D.profile.projects=document.getElementById('pProj').value;
  D.profile.email=document.getElementById('pEmail').value;
  D.profile.phone=document.getElementById('pPhone').value;
  D.profile.college=document.getElementById('pCollege').value;
  D.profile.status=document.getElementById('pStatus').value;
  await saveData();
  setBusyState(btn, false);
  releaseLock('save-profile');
}
async function saveContact(){
  if(!acquireLock('save-contact')) return;
  const btn = findTriggerButton();
  setBusyState(btn, true, 'Saving...');
  D.contact={email:document.getElementById('cEmail').value,phone:document.getElementById('cPhone').value,location:document.getElementById('cLoc').value,website:document.getElementById('cWeb').value};
  await saveData();
  setBusyState(btn, false);
  releaseLock('save-contact');
}

async function uploadAv(input){
  if(!acquireLock('upload-avatar')) return;
  const f=input.files[0];
  if(!f){ releaseLock('upload-avatar'); return; }
  if(f.size>5*1024*1024){showToast("Image too large (max 5MB)","error");releaseLock('upload-avatar');return;}
  const prevDisabled = input.disabled;
  input.disabled = true;
  showToast("Uploading photo...","info");
  try{
    const src=await supaUpload('profile/avatar_'+Date.now()+'_'+f.name, f);
    D.profile.avatar=src;
    await saveData(true);
    const heroAv=document.getElementById('heroAv');
    if(heroAv) heroAv.innerHTML=`<img src="${src}" alt="Profile" style="width:100%;height:100%;object-fit:cover;object-position:top center">`;
    const admAv=document.getElementById('admAv');
    if(admAv) admAv.innerHTML=`<img src="${src}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
    document.getElementById('avInput').value='';
    document.getElementById('avInputHero').value='';
    showToast("Profile photo updated!","success");
  }catch(e){showToast("Upload failed: "+e.message,"error");}
  input.disabled = prevDisabled;
  releaseLock('upload-avatar');
}

function saveGHUser(){
  D.github.ghUser2=document.getElementById('ghUser2').value.trim();
  saveData(true);
  renderActivities();
  showToast("GitHub username saved!","success");
}

async function uploadResume(input){
  if(!acquireLock('upload-resume')) return;
  const f=input.files[0];
  if(!f){ releaseLock('upload-resume'); return; }
  if(f.size>20*1024*1024){showToast("File too large (max 20MB)","error");document.getElementById('resumeErr').style.display='block';releaseLock('upload-resume');return;}
  document.getElementById('resumeErr').style.display='none';
  document.getElementById('resumeStatus').textContent='â³ Uploading...';
  const prevDisabled = input.disabled;
  input.disabled = true;
  const isPdf=f.type==='application/pdf';
  const isImg=f.type.startsWith('image/');
  try{
    const url=await supaUpload('resume/'+Date.now()+'_'+f.name, f);
    D.resume={url,dataUrl:null,name:f.name,lastUpdated:new Date().toLocaleDateString('en-IN')};
    const imgPrev=document.getElementById('resumeImgPrev');
    const pdfPrev=document.getElementById('resumePdfPrev');
    imgPrev.style.display='none';pdfPrev.style.display='none';
    if(isImg){imgPrev.src=url;imgPrev.style.display='block';}
    else if(isPdf){pdfPrev.src=url;pdfPrev.style.display='block';}
    document.getElementById('resumeStatus').textContent='âœ… Uploaded: '+f.name;
    document.getElementById('resumeLastUpdated').textContent='Last updated: '+D.resume.lastUpdated;
    await saveData();
  }catch(e){document.getElementById('resumeErr').style.display='block';document.getElementById('resumeStatus').textContent='';showToast("Upload failed: "+e.message,"error");}
  input.disabled = prevDisabled;
  releaseLock('upload-resume');
}
async function saveResumeUrl(){
  if(!acquireLock('resume-url')) return;
  const btn = findTriggerButton();
  setBusyState(btn, true, 'Saving...');
  const url=document.getElementById('resumeUrl').value.trim();
  if(!url){showToast("Please enter a URL","error");setBusyState(btn,false);releaseLock('resume-url');return;}
  D.resume={url,dataUrl:null,name:url,lastUpdated:new Date().toLocaleDateString('en-IN')};
  document.getElementById('resumeStatus').textContent='âœ… URL saved';
  document.getElementById('resumeLastUpdated').textContent='Last updated: '+D.resume.lastUpdated;
  await saveData();
  setBusyState(btn, false);
  releaseLock('resume-url');
}
function downloadResume(){
  const r=D.resume||{};
  if(r.url){
    openSafeUrl(r.url);
  } else {
    showToast("No resume yet. Login admin â†’ Resume to upload.","info");
  }
}

/* DRAG & DROP for resume */
const rdz=document.getElementById('resumeDropZone');
if(rdz){
  rdz.addEventListener('dragover',e=>{e.preventDefault();rdz.classList.add('drag-over');});
  rdz.addEventListener('dragleave',()=>rdz.classList.remove('drag-over'));
  rdz.addEventListener('drop',e=>{
    e.preventDefault();rdz.classList.remove('drag-over');
    const f=e.dataTransfer.files[0];
    if(f){const inp=document.getElementById('resumeInput');const dt=new DataTransfer();dt.items.add(f);inp.files=dt.files;uploadResume(inp);}
  });
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   ADMIN LISTS
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const TK={education:'education',skill:'skills',project:'projects',experience:'experience',certificate:'certificates',gallery:'gallery',activity:'activities',language:'languages',hobby:'hobbies',blog:'blog',social:'social'};
function nid(arr){return arr&&arr.length?Math.max(...arr.map(i=>i.id||0))+1:1;}
function delItem(tp,id){if(!confirm('Delete?'))return;const k=TK[tp];D[k]=(D[k]||[]).filter(i=>i.id!==id);saveData();renderAdminAll();}
function editItem(tp,id){const k=TK[tp];const item=(D[k]||[]).find(i=>i.id===id);if(item){_eid=id;_etyp=tp;openModal(tp,item);}}

function renderAdminAll(){
  rAEdu();rASkills();rAProj();rAExp();rACerts();rAGallery();rAActs();rALangs();rAHobbies();rABlog();rASocial();rAVis();
}

function rAEdu(){document.getElementById('aEdu').innerHTML=(D.education||[]).map(e=>`<div class="ac"><div class="ac-hd"><div><div class="ac-title">${e.icon||'ðŸŽ“'} ${e.degree}</div><div class="ac-sub">${e.inst||''} Â· ${e.year||''} Â· ${e.grade||''}</div></div><div class="ac-actions"><button class="ico-btn edit" onclick="editItem('education',${e.id})"><i class="fas fa-pen"></i></button><button class="ico-btn del" onclick="delItem('education',${e.id})"><i class="fas fa-trash"></i></button></div></div></div>`).join('');}
function rASkills(){const cats=[...new Set((D.skills||[]).map(s=>s.category))];document.getElementById('aSkills').innerHTML=cats.map(cat=>`<div class="ac"><div class="ac-title" style="margin-bottom:10px">${cat}</div>${(D.skills||[]).filter(s=>s.category===cat).map(s=>`<div class="chip-row"><div class="chip-left">${s.icon||''} ${s.name}</div><div class="ac-actions"><button class="ico-btn edit" onclick="editItem('skill',${s.id})"><i class="fas fa-pen"></i></button><button class="ico-btn del" onclick="delItem('skill',${s.id})"><i class="fas fa-trash"></i></button></div></div>`).join('')}</div>`).join('');}
function rAProj(){document.getElementById('aProjects').innerHTML=(D.projects||[]).map(p=>`<div class="ac"><div class="ac-hd"><div><div class="ac-title">ðŸš€ ${p.name}</div><div class="ac-sub">${(p.tags||[]).join(' Â· ')}</div></div><div class="ac-actions"><button class="ico-btn edit" onclick="editItem('project',${p.id})"><i class="fas fa-pen"></i></button><button class="ico-btn del" onclick="delItem('project',${p.id})"><i class="fas fa-trash"></i></button></div></div></div>`).join('');}
function rAExp(){document.getElementById('aExp').innerHTML=(D.experience||[]).map(e=>`<div class="ac"><div class="ac-hd"><div><div class="ac-title">ðŸ’¼ ${e.role}</div><div class="ac-sub">${e.company||''} Â· ${e.period||''} Â· ${e.type||''}</div></div><div class="ac-actions"><button class="ico-btn edit" onclick="editItem('experience',${e.id})"><i class="fas fa-pen"></i></button><button class="ico-btn del" onclick="delItem('experience',${e.id})"><i class="fas fa-trash"></i></button></div></div></div>`).join('');}

function rACerts(){
  document.getElementById('aCerts').innerHTML=(D.certificates||[]).map(c=>{
    const hasMedia=c.media&&c.media.length>10;
    const type=inferMediaType(c.media,c.mediaType);
    return `<div class="ac"><div class="ac-hd">
      <div style="display:flex;align-items:center;gap:12px;flex:1">
        ${hasMedia?`<div style="width:52px;height:40px;border-radius:6px;overflow:hidden;cursor:pointer" onclick="openLB('${c.media}','${type}')" title="Click to preview">${mediaTag(c.media,type,'width:100%;height:100%;object-fit:cover')}</div>`:'<div style="width:52px;height:40px;background:var(--surf);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">ðŸ†</div>'}
        <div><div class="ac-title">${c.name}</div><div class="ac-sub">${c.issuer||''} Â· ${c.date||''}${hasMedia?' Â· ðŸ“Ž Media':''}${c.liLink?' Â· ðŸ”— LinkedIn':''}</div></div>
      </div>
      <div class="ac-actions"><button class="ico-btn edit" onclick="editItem('certificate',${c.id})"><i class="fas fa-pen"></i></button><button class="ico-btn del" onclick="delItem('certificate',${c.id})"><i class="fas fa-trash"></i></button></div>
    </div></div>`;
  }).join('');
}

function rAGallery(){
  const items=D.gallery||[];
  document.getElementById('aGallery').innerHTML=items.length?items.map(g=>{
    const hasMedia=g.media&&g.media.length>10;
    const type=inferMediaType(g.media,g.mediaType);
    return`<div class="ac"><div class="ac-hd">
      <div style="display:flex;align-items:center;gap:12px;flex:1">
        ${hasMedia?`<div style="width:60px;height:44px;border-radius:6px;overflow:hidden;flex-shrink:0;cursor:pointer" onclick="openLB('${g.media}','${type}')">${mediaTag(g.media,type,'width:100%;height:100%;object-fit:cover')}</div>`:'<div style="width:60px;height:44px;background:var(--surf);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:22px">ðŸ–¼ï¸</div>'}
        <div><div class="ac-title">${g.caption||'Gallery Item'}</div><div class="ac-sub">${g.mediaType||'No media'}</div></div>
      </div>
      <div class="ac-actions"><button class="ico-btn edit" onclick="editItem('gallery',${g.id})"><i class="fas fa-pen"></i></button><button class="ico-btn del" onclick="delItem('gallery',${g.id})"><i class="fas fa-trash"></i></button></div>
    </div></div>`;
  }).join(''):`<p style="color:var(--text3);font-size:14px">No gallery items. Click Add Item.</p>`;
}

function rAActs(){
  document.getElementById('aActs').innerHTML=(D.activities||[]).map(a=>`<div class="ac"><div class="ac-hd"><div><div class="ac-title">${a.type==='linkedin'?'ðŸ”—':'â­'} ${a.title||'Activity'}</div><div class="ac-sub">${a.type==='linkedin'?'LinkedIn Post':'GitHub Repo'} Â· ${a.date||''}</div></div><div class="ac-actions"><button class="ico-btn edit" onclick="editItem('activity',${a.id})"><i class="fas fa-pen"></i></button><button class="ico-btn del" onclick="delItem('activity',${a.id})"><i class="fas fa-trash"></i></button></div></div></div>`).join('');
}
function rALangs(){document.getElementById('aLangs').innerHTML=(D.languages||[]).map(l=>`<div class="chip-row"><div class="chip-left">${l.flag||'ðŸŒ'} ${l.name} â€” <span style="color:var(--text3)">${l.level||''}</span></div><div class="ac-actions"><button class="ico-btn edit" onclick="editItem('language',${l.id})"><i class="fas fa-pen"></i></button><button class="ico-btn del" onclick="delItem('language',${l.id})"><i class="fas fa-trash"></i></button></div></div>`).join('');}
function rAHobbies(){document.getElementById('aHobbies').innerHTML=(D.hobbies||[]).map(h=>`<div class="chip-row"><div class="chip-left">${h.icon||'â­'} ${h.name}</div><div class="ac-actions"><button class="ico-btn edit" onclick="editItem('hobby',${h.id})"><i class="fas fa-pen"></i></button><button class="ico-btn del" onclick="delItem('hobby',${h.id})"><i class="fas fa-trash"></i></button></div></div>`).join('');}
function rABlog(){const items=D.blog||[];document.getElementById('aBlog').innerHTML=items.length?items.map(b=>`<div class="ac"><div class="ac-hd"><div><div class="ac-title">ðŸ“ ${b.title||'Post'}</div><div class="ac-sub">${b.tag||''} Â· ${b.date||''}</div></div><div class="ac-actions"><button class="ico-btn edit" onclick="editItem('blog',${b.id})"><i class="fas fa-pen"></i></button><button class="ico-btn del" onclick="delItem('blog',${b.id})"><i class="fas fa-trash"></i></button></div></div></div>`).join(''):`<p style="color:var(--text3)">No blog posts yet.</p>`;}
function rASocial(){document.getElementById('aSocial').innerHTML=(D.social||[]).map(s=>`<div class="chip-row"><div class="chip-left" style="color:${s.color}"><div style="width:28px;height:28px;border-radius:6px;background:${s.color}18;display:flex;align-items:center;justify-content:center"><i class="${s.icon}"></i></div><div><div style="font-weight:700;font-size:13px">${s.name}</div><div style="color:var(--text3);font-size:12px">${s.handle||''}</div></div></div><div class="ac-actions"><button class="ico-btn edit" onclick="editItem('social',${s.id})"><i class="fas fa-pen"></i></button><button class="ico-btn del" onclick="delItem('social',${s.id})"><i class="fas fa-trash"></i></button></div></div>`).join('');}

function rAVis(){
  const v=D.visibility||{};
  const rows=[['hero','ðŸ  Hero'],['about','ðŸ‘¤ About'],['education','ðŸŽ“ Education'],['skills','ðŸ’» Skills'],['projects','ðŸš€ Projects'],['experience','ðŸ’¼ Experience'],['certificates','ðŸ† Certificates'],['gallery','ðŸ–¼ï¸ Gallery'],['activities','âš¡ Activities'],['languages','ðŸŒ Languages'],['hobbies','â¤ï¸ Hobbies'],['blog','ðŸ“ Blog'],['contact','ðŸ“ž Contact']];
  document.getElementById('visGrid').innerHTML=rows.map(([k,l])=>`<div class="vis-row"><span style="font-size:15px">${l}</span><label class="toggle"><input type="checkbox" ${v[k]!==false?'checked':''} onchange="toggleVis('${k}',this.checked)"><span class="toggle-slider"></span></label></div>`).join('');
}
function toggleVis(k,v){if(!D.visibility)D.visibility={};D.visibility[k]=v;saveData(true);applyVis();}

async function saveGHConfig(){
  if(!acquireLock('gh-config')) return;
  const btn = findTriggerButton();
  setBusyState(btn, true, 'Saving...');
  const tok=document.getElementById('ghToken').value;
  D.github.user=document.getElementById('ghUser').value.trim();
  D.github.repo=document.getElementById('ghRepo').value.trim();
  D.github.branch=document.getElementById('ghBranch').value.trim()||'main';
  D.github.token=tok==='â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢'?(D.github.token||''):tok;
  await saveData(true);
  document.getElementById('ghConfigStatus').textContent='âœ… Config saved locally.';
  showToast("GitHub config saved!","success");
  setBusyState(btn, false);
  releaseLock('gh-config');
}

async function syncGH(){
  if(!acquireLock('gh-sync')) return;
  const gh=D.github||{};
  if(!gh.user||!gh.repo||!gh.token){showToast("Set up GitHub config first","error");releaseLock('gh-sync');return;}
  const dot=document.getElementById('syncDot');
  const txt=document.getElementById('syncTxt');
  setButtonsBusy('.adm-btn.sync-gh, #tab-github .btn-save2', true);
  dot.className='sync-dot busy'; txt.textContent='Syncing...';
  try {
    const apiBase=`https://api.github.com/repos/${gh.user}/${gh.repo}/contents/data.json`;
    const headers={'Authorization':'token '+gh.token,'Content-Type':'application/json'};
    const safeD=JSON.parse(JSON.stringify(D));
    if(safeD.profile?.avatar?.length>10000) safeD.profile.avatar='[stored locally]';
    if(safeD.resume?.dataUrl) safeD.resume.dataUrl='[stored locally]';
    safeD.auth={username:'[hidden]',password:'[hidden]'};
    const content=btoa(unescape(encodeURIComponent(JSON.stringify(safeD,null,2))));
    let sha=null;
    try{const c=await fetch(apiBase,{headers});if(c.ok){const d=await c.json();sha=d.sha;}}catch(e){}
    const body={message:`Portfolio update ${new Date().toISOString()}`,content,branch:gh.branch||'main'};
    if(sha) body.sha=sha;
    const res=await fetch(apiBase,{method:'PUT',headers,body:JSON.stringify(body)});
    if(res.ok){dot.className='sync-dot ok';txt.textContent='Synced '+new Date().toLocaleTimeString();showToast("âœ… Synced to GitHub!","success");}
    else{const err=await res.json();throw new Error(err.message);}
  }catch(e){dot.className='sync-dot err';txt.textContent='Sync failed';showToast("Sync failed: "+e.message,"error");}
  setButtonsBusy('.adm-btn.sync-gh, #tab-github .btn-save2', false);
  releaseLock('gh-sync');
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   MODALS
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const SK=['Frontend','Backend','Languages','Mobile','ML / AI','Tools','Database','DevOps','Design','Other'];
const XT=['Internship','Full-time','Part-time','Freelance','Academic','Achievement','Volunteer','Other'];
const LL=['Native','Fluent','Professional','Conversational','Beginner'];
const BT=['Tech','Tutorial','Project','Career','Life','Opinion','Other'];
const SP=[{n:'LinkedIn',i:'fab fa-linkedin',c:'#0077b5'},{n:'GitHub',i:'fab fa-github',c:'#7c5cbf'},{n:'Instagram',i:'fab fa-instagram',c:'#e1306c'},{n:'WhatsApp',i:'fab fa-whatsapp',c:'#25d366'},{n:'Twitter/X',i:'fab fa-twitter',c:'#1da1f2'},{n:'YouTube',i:'fab fa-youtube',c:'#ff0000'},{n:'Portfolio',i:'fas fa-globe',c:'#00e5c8'},{n:'Email',i:'fas fa-envelope',c:'#ea4335'},{n:'Other',i:'fas fa-link',c:'#6b8aaa'}];
const EMOJIS=['ðŸ’»','ðŸŒ','âš›ï¸','ðŸŸ¢','ðŸ“±','ðŸ¤–','ðŸ”§','âš™ï¸','ðŸŽ¨','ðŸ—„ï¸','â˜•','ðŸ','ðŸ†','ðŸŽ“','ðŸš€','â­','â¤ï¸','ðŸŽ®','ðŸŽµ','ðŸ“–','ðŸ‹ï¸','ðŸŒ','ðŸ•','ðŸ“Š','ðŸ”¬','ðŸ’¡','ðŸ› ï¸','ðŸ”','ðŸ“¦','ðŸŽ¯','ðŸ…','ðŸ“œ','ðŸŒŸ','ðŸ’Ž','ðŸ”‘','ðŸŽ¸','âš½','ðŸ€','âœˆï¸','ðŸŒˆ','ðŸ¦','ðŸ¬','ðŸŒº','ðŸ€','ðŸ”¥','â„ï¸','âš¡','ðŸŒ™','ðŸŽ­','ðŸ—ï¸'];
const FLAGS=['ðŸ‡¬ðŸ‡§','ðŸ‡®ðŸ‡³','ðŸ‡ºðŸ‡¸','ðŸ‡«ðŸ‡·','ðŸ‡©ðŸ‡ª','ðŸ‡¯ðŸ‡µ','ðŸ‡¨ðŸ‡³','ðŸ‡§ðŸ‡·','ðŸ‡ªðŸ‡¸','ðŸ‡·ðŸ‡º','ðŸ‡¦ðŸ‡º','ðŸ‡¨ðŸ‡¦','ðŸ‡°ðŸ‡·','ðŸŒ','ðŸ—£ï¸'];

function epick(tid){return`<div class="epick">${EMOJIS.map(e=>`<button class="epick-btn" type="button" onclick="gi('${tid}').value='${e}'">${e}</button>`).join('')}</div>`;}
function fpick(tid){return`<div class="epick">${FLAGS.map(e=>`<button class="epick-btn" type="button" onclick="gi('${tid}').value='${e}'">${e}</button>`).join('')}</div>`;}

function uploadBlock(mId,tId,iId,vId,pId,ex){
  const hasImg=ex?.media&&ex?.mediaType!=='video'&&ex?.mediaType!=='pdf';
  const hasVid=ex?.media&&ex?.mediaType==='video';
  const hasPdf=ex?.media&&(ex?.mediaType==='pdf'||ex?.media?.startsWith('data:application/pdf'));
  return`
    <div class="drop-zone" id="dz_${mId}">
      <input type="file" accept="image/*,video/*,application/pdf" onchange="handleUpload(this,'${mId}','${tId}','${iId}','${vId}','${pId}')">
      <div class="drop-ico"><i class="fas fa-cloud-upload-alt"></i></div>
      <div class="drop-txt">Click or drag & drop<small>Image, Video, or PDF</small></div>
    </div>
    <div class="upload-err" id="uerr_${mId}"></div>
    <img id="${iId}" class="upload-preview" alt="Preview" ${hasImg&&ex.media.length>10?`src="${ex.media}" style="display:block"`:''}>
    <video id="${vId}" class="upload-vid-preview" controls ${hasVid&&ex.media.length>10?`src="${ex.media}" style="display:block"`:''}>
    <iframe id="${pId}" class="upload-pdf-preview" ${hasPdf?`src="${ex.media}" style="display:block"`:''}></iframe>
    <input type="hidden" id="${mId}" value="${ex?.media||''}">
    <input type="hidden" id="${tId}" value="${ex?.mediaType||''}">`;
}

async function handleUpload(inp,mId,tId,iId,vId,pId){
  const lockKey='upload-'+mId;
  if(!acquireLock(lockKey)) return;
  const f=inp.files[0];
  if(!f){ releaseLock(lockKey); return; }
  const errEl=document.getElementById('uerr_'+mId);
  const dz=document.getElementById('dz_'+mId);
  if(dz) dz.classList.add('is-busy');
  inp.disabled = true;
  errEl.style.display='none';
  if(f.size>20*1024*1024){errEl.textContent='âŒ File too large (max 20MB)';errEl.style.display='block';showToast("File too large","error");if(dz) dz.classList.remove('is-busy');inp.disabled=false;releaseLock(lockKey);return;}
  const isVid=f.type.startsWith('video/');
  const isPdf=f.type==='application/pdf';
  showToast("Uploading...","info");
  try{
    const src=await supaUpload('uploads/'+mId+'_'+Date.now()+'_'+f.name, f);
    gi(mId).value=src;
    gi(tId).value=isVid?'video':isPdf?'pdf':'image';
    const img=document.getElementById(iId);
    const vid=document.getElementById(vId);
    const pdf=document.getElementById(pId);
    img.style.display='none';vid.style.display='none';pdf.style.display='none';
    if(isVid){vid.src=src;vid.style.display='block';}
    else if(isPdf){pdf.src=src;pdf.style.display='block';}
    else{img.src=src;img.style.display='block';}
    showToast("Uploaded! Click Save to apply.","success");
  }catch(e){errEl.textContent='âŒ Upload failed: '+e.message;errEl.style.display='block';showToast("Upload failed","error");}
  if(dz) dz.classList.remove('is-busy');
  inp.disabled = false;
  releaseLock(lockKey);
}

function openModal(tp,ex=null){
  _eid=ex?ex.id:null;_etyp=tp;
  const act=ex?'Edit':'Add';
  const titles={education:'Education',skill:'Skill',project:'Project',experience:'Experience',certificate:'Certificate',gallery:'Gallery Item',activity:'Activity',language:'Language',hobby:'Hobby',blog:'Blog Post',social:'Social Media'};
  document.getElementById('modalHd').innerHTML=`${act} ${titles[tp]} <button class="modal-close-btn" onclick="closeModal()">âœ•</button>`;

  const forms={
    education:`
      <div class="fg"><label class="fl">Icon Emoji</label><input class="fi" id="mEi" value="${ex?.icon||'ðŸŽ“'}" style="width:70px">${epick('mEi')}</div>
      <div class="fg"><label class="fl">Degree / Course</label><input class="fi" id="mEd" value="${ex?.degree||''}"></div>
      <div class="fg"><label class="fl">Institution</label><input class="fi" id="mEin" value="${ex?.inst||''}"></div>
      <div class="fr2">
        <div class="fg"><label class="fl">Year</label><input class="fi" id="mEy" value="${ex?.year||''}"></div>
        <div class="fg"><label class="fl">Grade / CGPA</label><input class="fi" id="mEg" value="${ex?.grade||''}"></div>
      </div>
      <button class="btn-save" onclick="saveM()">ðŸ’¾ Save</button>`,

    skill:`
      <div class="fg"><label class="fl">Category</label>
        <div class="ctabs" id="skCatTabs">${SK.map(c=>`<button type="button" class="ctab${ex?.category===c?' active':''}" onclick="pickCat(this,'mScat','${c}')">${c}</button>`).join('')}</div>
        <input type="hidden" id="mScat" value="${ex?.category||SK[0]}">
        <div id="mScatOtherWrap" style="${ex?.category==='Other'?'':'display:none'}" class="fg">
          <label class="fl">Custom Category Name</label><input class="fi" id="mScatOther" value="${!SK.includes(ex?.category||'')?ex?.category||'':''}">
        </div>
      </div>
      <div class="fg"><label class="fl">Skill Name</label><input class="fi" id="mSn" value="${ex?.name||''}"></div>
      <div class="fg"><label class="fl">Icon Emoji</label><input class="fi" id="mSi" value="${ex?.icon||'ðŸ’¡'}" style="width:70px">${epick('mSi')}</div>
      <button class="btn-save" onclick="saveM()">ðŸ’¾ Save</button>`,

    project:`
      <div class="fg"><label class="fl">Project Name</label><input class="fi" id="mPn" value="${ex?.name||''}"></div>
      <div class="fg"><label class="fl">Description</label><textarea class="ft" id="mPd">${ex?.desc||''}</textarea></div>
      <div class="fg"><label class="fl">Tags (comma separated)</label><input class="fi" id="mPt" value="${(ex?.tags||[]).join(', ')}"></div>
      <div class="fr2">
        <div class="fg"><label class="fl">GitHub URL</label><input class="fi" id="mPg" value="${ex?.github||''}"></div>
        <div class="fg"><label class="fl">Demo URL</label><input class="fi" id="mPdm" value="${ex?.demo||''}"></div>
      </div>
      <div class="fg"><label class="fl">Thumbnail (Image/Video)</label>${uploadBlock('mPmed','mPmt','mPimg','mPvid','mPpdf',ex)}</div>
      <button class="btn-save" onclick="saveM()">ðŸ’¾ Save</button>`,

    experience:`
      <div class="fg"><label class="fl">Role / Position</label><input class="fi" id="mXr" value="${ex?.role||''}"></div>
      <div class="fg"><label class="fl">Company / Organisation</label><input class="fi" id="mXc" value="${ex?.company||''}"></div>
      <div class="fr2">
        <div class="fg"><label class="fl">Period</label><input class="fi" id="mXp" value="${ex?.period||''}"></div>
        <div class="fg"><label class="fl">Type</label>
          <select class="fs" id="mXtsel" onchange="gi('mXt').value=this.value;document.getElementById('mXtOtherWrap').style.display=this.value==='Other'?'block':'none'">
            ${XT.map(t=>`<option value="${t}"${ex?.type===t?' selected':''}>${t}</option>`).join('')}
          </select>
          <input type="hidden" id="mXt" value="${ex?.type||XT[0]}">
          <div id="mXtOtherWrap" style="${ex?.type==='Other'?'':'display:none'}" class="fg"><label class="fl">Custom Type</label><input class="fi" id="mXtOther" value="${!XT.includes(ex?.type||'')?ex?.type||'':''}"></div>
        </div>
      </div>
      <div class="fg"><label class="fl">Description</label><textarea class="ft" id="mXd">${ex?.desc||''}</textarea></div>
      <button class="btn-save" onclick="saveM()">ðŸ’¾ Save</button>`,

    certificate:`
      <div class="fg"><label class="fl">Certificate Name</label><input class="fi" id="mCn" value="${ex?.name||''}"></div>
      <div class="fr2">
        <div class="fg"><label class="fl">Issuing Organisation</label><input class="fi" id="mCi" value="${ex?.issuer||''}"></div>
        <div class="fg"><label class="fl">Date / Year</label><input class="fi" id="mCdt" value="${ex?.date||''}"></div>
      </div>
      <div class="fg"><label class="fl">Verification URL (optional)</label><input class="fi" id="mCl" value="${ex?.link||''}"></div>
      <div class="fg"><label class="fl">LinkedIn Post URL (optional)</label><input class="fi" id="mCll" placeholder="https://www.linkedin.com/posts/..." value="${ex?.liLink||''}"></div>
      <div class="fg"><label class="fl">Upload Certificate (Image / PDF / Video)</label>${uploadBlock('mCmed','mCmt','mCimg','mCvid','mCpdf',ex)}</div>
      <button class="btn-save" onclick="saveM()">ðŸ’¾ Save</button>`,

    gallery:`
      <div class="fg"><label class="fl">Caption (optional)</label><input class="fi" id="mGc" value="${ex?.caption||''}"></div>
      <div class="fg"><label class="fl">Upload Image or Video</label>${uploadBlock('mGmed','mGmt','mGimg','mGvid','mGpdf',ex)}</div>
      <button class="btn-save" onclick="saveM()">ðŸ’¾ Save</button>`,

    activity:`
      <div class="fg"><label class="fl">Activity Type</label>
        <div class="ctabs">${[['github','â­ GitHub Repository'],['linkedin','ðŸ”— LinkedIn Post']].map(([v,l])=>`<button type="button" class="ctab${ex?.type===v?' active':''}" onclick="pickCat(this,'mAtype','${v}')">${l}</button>`).join('')}</div>
        <input type="hidden" id="mAtype" value="${ex?.type||'github'}">
      </div>
      <div class="fg"><label class="fl">Title</label><input class="fi" id="mAt" value="${ex?.title||''}"></div>
      <div class="fg"><label class="fl">Description</label><textarea class="ft" id="mAd">${ex?.desc||''}</textarea></div>
      <div class="fg"><label class="fl">URL (GitHub repo or LinkedIn post link)</label><input class="fi" id="mAu" value="${ex?.url||''}"></div>
      <div class="fr2">
        <div class="fg"><label class="fl">Date</label><input class="fi" id="mAdt" value="${ex?.date||''}"></div>
        <div class="fg"><label class="fl">Language (for GitHub repos)</label><input class="fi" id="mAlang" value="${ex?.lang||''}"></div>
      </div>
      <div class="fr2">
        <div class="fg"><label class="fl">Stars (GitHub)</label><input class="fi" id="mAstars" value="${ex?.stars||''}"></div>
        <div class="fg"><label class="fl">Likes (LinkedIn)</label><input class="fi" id="mAlikes" value="${ex?.likes||''}"></div>
      </div>
      <button class="btn-save" onclick="saveM()">ðŸ’¾ Save</button>`,

    language:`
      <div class="fg"><label class="fl">Flag Emoji</label><input class="fi" id="mLf" value="${ex?.flag||'ðŸŒ'}" style="width:70px">${fpick('mLf')}</div>
      <div class="fg"><label class="fl">Language Name</label><input class="fi" id="mLn" value="${ex?.name||''}"></div>
      <div class="fg"><label class="fl">Proficiency Level</label>
        <select class="fs" id="mLlsel" onchange="gi('mLl').value=this.value;document.getElementById('mLlOtherWrap').style.display=this.value==='Other'?'block':'none'">
          ${LL.map(l=>`<option value="${l}"${ex?.level===l?' selected':''}>${l}</option>`).join('')}<option value="Other">Other</option>
        </select>
        <input type="hidden" id="mLl" value="${ex?.level||LL[0]}">
        <div id="mLlOtherWrap" style="display:none" class="fg"><label class="fl">Custom Level</label><input class="fi" id="mLlOther"></div>
      </div>
      <button class="btn-save" onclick="saveM()">ðŸ’¾ Save</button>`,

    hobby:`
      <div class="fg"><label class="fl">Icon Emoji</label><input class="fi" id="mHi" value="${ex?.icon||'â­'}" style="width:70px">${epick('mHi')}</div>
      <div class="fg"><label class="fl">Hobby Name</label><input class="fi" id="mHn" value="${ex?.name||''}"></div>
      <button class="btn-save" onclick="saveM()">ðŸ’¾ Save</button>`,

    blog:`
      <div class="fg"><label class="fl">Post Title</label><input class="fi" id="mBt" value="${ex?.title||''}"></div>
      <div class="fg"><label class="fl">Excerpt / Summary</label><textarea class="ft" id="mBe">${ex?.excerpt||''}</textarea></div>
      <div class="fr2">
        <div class="fg"><label class="fl">Tag</label>
          <select class="fs" id="mBtsel">${BT.map(t=>`<option value="${t}"${ex?.tag===t?' selected':''}>${t}</option>`).join('')}<option value="Other">Other</option></select>
          <input type="hidden" id="mBtag" value="${ex?.tag||BT[0]}">
        </div>
        <div class="fg"><label class="fl">Date</label><input class="fi" id="mBd" value="${ex?.date||new Date().toLocaleDateString('en-IN')}"></div>
      </div>
      <div class="fr2">
        <div class="fg"><label class="fl">Read Time</label><input class="fi" id="mBr" value="${ex?.readTime||'3 min read'}"></div>
        <div class="fg"><label class="fl">External URL</label><input class="fi" id="mBu" value="${ex?.url||''}"></div>
      </div>
      <button class="btn-save" onclick="saveM()">ðŸ’¾ Save</button>`,

    social:`
      <div class="fg"><label class="fl">Platform</label>
        <div class="ctabs" id="socTabsM">${SP.map(s=>`<button type="button" class="ctab${ex?.name===s.n?' active':''}" style="${ex?.name===s.n?`color:${s.c};border-color:${s.c}44`:''}" onclick="pickSoc(this,'${s.n}','${s.i}','${s.c}')">${s.n}</button>`).join('')}</div>
        <input type="hidden" id="mSocN" value="${ex?.name||''}">
        <input type="hidden" id="mSocI" value="${ex?.icon||'fas fa-link'}">
        <input type="hidden" id="mSocC" value="${ex?.color||'#6b8aaa'}">
      </div>
      <div class="fg"><label class="fl">Display Name / Handle</label><input class="fi" id="mSocH" value="${ex?.handle||''}"></div>
      <div class="fg"><label class="fl">Profile URL</label><input class="fi" id="mSocU" value="${ex?.url||''}"></div>
      <button class="btn-save" onclick="saveM()">ðŸ’¾ Save</button>`
  };

  document.getElementById('modalBody').innerHTML=forms[tp]||'<p>Unknown type</p>';

  document.querySelectorAll('.drop-zone').forEach(dz=>{
    dz.addEventListener('dragover',e=>{e.preventDefault();dz.classList.add('drag-over');});
    dz.addEventListener('dragleave',()=>dz.classList.remove('drag-over'));
    dz.addEventListener('drop',e=>{
      e.preventDefault();dz.classList.remove('drag-over');
      const f=e.dataTransfer.files[0];
      if(f){const inp=dz.querySelector('input[type=file]');if(inp){const dt=new DataTransfer();dt.items.add(f);inp.files=dt.files;inp.dispatchEvent(new Event('change'));}}
    });
  });

  document.getElementById('modal').classList.add('on');
}

function pickCat(btn,tid,val){
  btn.closest('.ctabs').querySelectorAll('.ctab').forEach(b=>{b.classList.remove('active');b.style.color='';b.style.borderColor='';});
  btn.classList.add('active');
  gi(tid).value=val;
  if(tid==='mScat'){const w=document.getElementById('mScatOtherWrap');if(w)w.style.display=val==='Other'?'block':'none';}
}
function pickSoc(btn,n,i,c){
  btn.closest('.ctabs').querySelectorAll('.ctab').forEach(b=>{b.classList.remove('active');b.style.color='';b.style.borderColor='';});
  btn.classList.add('active');btn.style.color=c;btn.style.borderColor=c+'44';
  gi('mSocN').value=n;gi('mSocI').value=i;gi('mSocC').value=c;
}

const gi=id=>{const el=document.getElementById(id);return el?el:({value:''});};
const gv=id=>{const el=document.getElementById(id);return el?el.value:'';};

async function saveM(){
  if(!acquireLock('modal-save')) return;
  const btn = findTriggerButton();
  setBusyState(btn, true, 'Saving...');
  const tp=_etyp; const isEdit=_eid!==null; const k=TK[tp];
  let obj={};
  if(tp==='education') obj={id:isEdit?_eid:nid(D[k]),icon:gv('mEi'),degree:gv('mEd'),inst:gv('mEin'),year:gv('mEy'),grade:gv('mEg')};
  else if(tp==='skill'){
    let cat=gv('mScat');
    if(cat==='Other'){const oc=gv('mScatOther');if(oc.trim())cat=oc.trim();}
    obj={id:isEdit?_eid:nid(D[k]),category:cat,name:gv('mSn'),icon:gv('mSi')};
  }
  else if(tp==='project') obj={id:isEdit?_eid:nid(D[k]),name:gv('mPn'),desc:gv('mPd'),tags:gv('mPt').split(',').map(s=>s.trim()).filter(Boolean),github:gv('mPg'),demo:gv('mPdm'),media:gv('mPmed')||null,mediaType:gv('mPmt')||null};
  else if(tp==='experience'){
    let type=gv('mXtsel');if(type==='Other'){const ot=gv('mXtOther');if(ot.trim())type=ot.trim();}
    obj={id:isEdit?_eid:nid(D[k]),role:gv('mXr'),company:gv('mXc'),period:gv('mXp'),type,desc:gv('mXd')};
  }
  else if(tp==='certificate') obj={id:isEdit?_eid:nid(D[k]),name:gv('mCn'),issuer:gv('mCi'),date:gv('mCdt'),link:gv('mCl'),liLink:gv('mCll'),media:gv('mCmed')||null,mediaType:gv('mCmt')||null};
  else if(tp==='gallery') obj={id:isEdit?_eid:nid(D[k]),caption:gv('mGc'),media:gv('mGmed')||null,mediaType:gv('mGmt')||null};
  else if(tp==='activity') obj={id:isEdit?_eid:nid(D[k]),type:gv('mAtype'),title:gv('mAt'),desc:gv('mAd'),url:gv('mAu'),date:gv('mAdt'),lang:gv('mAlang'),stars:gv('mAstars'),likes:gv('mAlikes')};
  else if(tp==='language'){
    let lvl=gv('mLlsel');if(lvl==='Other'){const ol=gv('mLlOther');if(ol.trim())lvl=ol.trim();}
    obj={id:isEdit?_eid:nid(D[k]),flag:gv('mLf'),name:gv('mLn'),level:lvl};
  }
  else if(tp==='hobby') obj={id:isEdit?_eid:nid(D[k]),icon:gv('mHi'),name:gv('mHn')};
  else if(tp==='blog'){let tag=gv('mBtsel');if(tag==='Other')tag=gv('mBtag')||'Other';obj={id:isEdit?_eid:nid(D[k]),title:gv('mBt'),excerpt:gv('mBe'),tag,date:gv('mBd'),readTime:gv('mBr'),url:gv('mBu')};}
  else if(tp==='social') obj={id:isEdit?_eid:nid(D[k]),name:gv('mSocN'),handle:gv('mSocH'),url:gv('mSocU'),icon:gv('mSocI'),color:gv('mSocC')};

  if(isEdit){const idx=D[k].findIndex(e=>e.id===_eid);if(idx>-1)D[k][idx]=obj;}
  else D[k].push(obj);

  await saveData();renderAdminAll();closeModal();_eid=null;
  setBusyState(btn, false);
  releaseLock('modal-save');
}

async function saveProfileAndApply(){
  await saveProfile();
  renderAll();
  showToast('Profile updated live!','success');
}

function closeModal(){document.getElementById('modal').classList.remove('on');}
document.getElementById('modal').addEventListener('click',e=>{if(e.target===document.getElementById('modal'))closeModal();});

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   TOAST
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
let _tt;
function showToast(msg,type='success'){
  clearTimeout(_tt);
  const t=document.getElementById('toast');
  t.className='toast on '+type;
  document.getElementById('toastIco').className=`fas fa-${type==='error'?'exclamation-circle':type==='info'?'info-circle':'check-circle'}`;
  document.getElementById('toastTxt').textContent=msg;
  _tt=setTimeout(()=>t.classList.remove('on'),3800);
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   NEON PARTICLES + TYPING + CURSOR
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
(function(){
  const canvas = document.getElementById('neonCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  const COLORS = ['rgba(0,229,200,', 'rgba(0,180,255,', 'rgba(139,92,246,'];
  function resize(){ W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  function mkParticle(){
    return {
      x: Math.random()*W, y: Math.random()*H,
      r: Math.random()*1.8+.4,
      vx: (Math.random()-.5)*.4, vy: (Math.random()-.5)*.4,
      color: COLORS[Math.floor(Math.random()*COLORS.length)],
      alpha: Math.random()*.6+.2,
      pulse: Math.random()*Math.PI*2
    };
  }
  for(let i=0;i<120;i++) particles.push(mkParticle());
  function drawParticles(){
    ctx.clearRect(0,0,W,H);
    particles.forEach(p=>{
      p.pulse += .02;
      const a = p.alpha*(0.7+0.3*Math.sin(p.pulse));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = p.color+a+')';
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color+'0.8)';
      ctx.fill();
      ctx.shadowBlur = 0;
      p.x += p.vx; p.y += p.vy;
      if(p.x<0||p.x>W||p.y<0||p.y>H) Object.assign(p, mkParticle(), {x:Math.random()*W, y:Math.random()*H});
    });
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y;
        const dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<100){
          ctx.beginPath();
          ctx.moveTo(particles[i].x,particles[i].y);
          ctx.lineTo(particles[j].x,particles[j].y);
          ctx.strokeStyle='rgba(0,229,200,'+(0.08*(1-dist/100))+')';
          ctx.lineWidth=.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawParticles);
  }
  drawParticles();

  const cg = document.getElementById('cursorGlow');
  document.addEventListener('mousemove', e=>{
    cg.style.left = e.clientX+'px';
    cg.style.top = e.clientY+'px';
  });
  document.querySelectorAll('a,button,.proj-card,.skill-cat-card,.cert-card,.edu-card').forEach(el=>{
    el.addEventListener('mouseenter',()=>cg.classList.add('big'));
    el.addEventListener('mouseleave',()=>cg.classList.remove('big'));
  });

  let _typeTimer = null;
  function startTyping(){
    clearTimeout(_typeTimer);
    const raw = D.profile.typingRoles || 'Full Stack Developer,Android Developer,ML Engineer,UI/UX Enthusiast';
    const roles = raw.split(',').map(s=>s.trim()).filter(Boolean);
    if(!roles.length) return;
    let ri=0, ci=0, deleting=false;
    const roleEl = document.getElementById('heroRole');
    function typeRole(){
      if(!roleEl) return;
      const current = roles[ri];
      if(!deleting){
        roleEl.textContent = current.slice(0,ci+1);
        ci++;
        if(ci===current.length){ deleting=true; _typeTimer=setTimeout(typeRole,1800); return; }
      } else {
        roleEl.textContent = current.slice(0,ci-1);
        ci--;
        if(ci===0){ deleting=false; ri=(ri+1)%roles.length; }
      }
      _typeTimer=setTimeout(typeRole, deleting?60:100);
    }
    _typeTimer=setTimeout(typeRole, 1200);
  }
  startTyping();
  // expose so renderHero can restart it after admin save
  window._restartTyping = startTyping;
})();

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   INIT
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
(async ()=>{
  await loadData();
  checkMaintenance();
  renderAll();
  initReveal();
})();

window.addEventListener('scroll',()=>{
  updateNavState();
});

document.addEventListener('click', (e)=>{
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  if(!navLinks || !hamburger) return;
  if(!navLinks.classList.contains('mobile-open')) return;
  const clickedInsideNav = navLinks.contains(e.target) || hamburger.contains(e.target);
  if(!clickedInsideNav) closeMobileNav();
});

document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') closeMobileNav();
});

updateNavState();


