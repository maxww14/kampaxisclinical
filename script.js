
const menu=document.querySelector('.menu'), nav=document.querySelector('.nav');
if(menu) menu.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.flexDirection='column';nav.style.position='absolute';nav.style.top='100px';nav.style.left='0';nav.style.right='0';nav.style.background='#fff';nav.style.padding='18px 4%';nav.style.borderBottom='1px solid #dce7ef'});
document.querySelectorAll('.faq-q').forEach(q=>q.addEventListener('click',()=>q.parentElement.classList.toggle('open')));
document.querySelectorAll('.nav-dropdown-toggle').forEach(btn=>{btn.addEventListener('click',e=>{e.stopPropagation();const d=btn.closest('.nav-dropdown'),wasOpen=d.classList.contains('open');document.querySelectorAll('.nav-dropdown.open').forEach(x=>{x.classList.remove('open');x.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded','false')});if(!wasOpen){d.classList.add('open');btn.setAttribute('aria-expanded','true')}})});
document.addEventListener('click',()=>{document.querySelectorAll('.nav-dropdown.open').forEach(x=>{x.classList.remove('open');x.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded','false')})});
const form=document.querySelector('#contactForm');
if(form) form.addEventListener('submit',e=>{e.preventDefault();const s=document.querySelector('.form-status');s.style.display='block';s.textContent='Thank you. Your consultation request has been captured in this website demo. Connect this form to your production email or CRM before launch.';form.reset()});
