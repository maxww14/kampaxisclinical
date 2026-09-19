const menu=document.querySelector('.menu'), nav=document.querySelector('.nav');
if(menu) menu.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.flexDirection='column';nav.style.position='absolute';nav.style.top='100px';nav.style.left='0';nav.style.right='0';nav.style.background='#fff';nav.style.padding='18px 4%';nav.style.borderBottom='1px solid #dce7ef'});
document.querySelectorAll('.faq-q').forEach(q=>q.addEventListener('click',()=>q.parentElement.classList.toggle('open')));
document.querySelectorAll('.nav-dropdown-toggle').forEach(btn=>{btn.addEventListener('click',e=>{e.stopPropagation();const d=btn.closest('.nav-dropdown'),wasOpen=d.classList.contains('open');document.querySelectorAll('.nav-dropdown.open').forEach(x=>{x.classList.remove('open');x.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded','false')});if(!wasOpen){d.classList.add('open');btn.setAttribute('aria-expanded','true')}})});
document.addEventListener('click',()=>{document.querySelectorAll('.nav-dropdown.open').forEach(x=>{x.classList.remove('open');x.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded','false')})});

const form=document.querySelector('#contactForm');
if(form) form.addEventListener('submit', async e=>{
  e.preventDefault();
  const s=document.querySelector('.form-status');

  // Honeypot check — if filled, silently drop (bot)
  if(form.querySelector('[name="_gotcha"]').value){
    form.reset();
    return;
  }

  const data=new FormData(form);
  try{
    const res=await fetch(form.action,{method:'POST',body:data,headers:{'Accept':'application/json'}});
    if(res.ok){
      s.style.display='block';
      s.textContent='Thank you. Your consultation request has been sent — we\'ll be in touch shortly.';
      form.reset();
    } else {
      s.style.display='block';
      s.textContent='Something went wrong — please try again or email us directly.';
    }
  } catch(err){
    s.style.display='block';
    s.textContent='Something went wrong — please try again or email us directly.';
  }
});
