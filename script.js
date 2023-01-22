document.querySelector('#enter').onclick =function(){
    if(document.querySelector('#sub_container input').value.length == 0){
        alert("Enter the task");
    }
    else{
        document.querySelector('#tasks').innerHTML +=`
        <div class=task>
            <span id="taskname"> ${document.querySelector('#sub_container input').value}
                </span>
                <button class="delete">Delete</button>
                </div> 
            `;
            
            var delete_task =document.querySelectorAll('.delete');

            for(let i=0; i < delete_task.length; i++){
                delete_task[i].onclick =function(){
                    this.parentNode.remove();
                }
            }
           var tasks =document.querySelectorAll('#taskname');
            for(let i=0; i < tasks.length;i++){
                tasks[i].onclick =function(){
                    this.classList.toggle('completed');
                }
            }
            document.querySelector('#sub_container input').value = "";
    }
  }