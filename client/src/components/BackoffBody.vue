<template>
  <section class="backoffice">
    <div class="backoffice_wrapper">
      <input type="radio" name="slider" checked id="home" />
      <input type="radio" name="slider" id="blog" />
      <input type="radio" name="slider" id="code" />
      <nav>
        <label for="home" class="home">Games</label>
        <label for="blog" class="blog">Métacritiques</label>
        <label for="code" class="code">Press</label>
      </nav>
      <section class="backoffice_section">
        <div class="content content-1">
          <h2>Game content</h2>
          <!-- Form post Game -->

          <form
            @submit.prevent="postUser"
            enctype="multipart/form-data"
            method="post"
          >
            <label for="gameTitle">Game Titre</label>
            <input
              placeholder="Titre"
              id="gameTitle"
              type="text"
              v-model="title"
            />

            <label for="gameTitleImage">Game Titre Image</label>

            <input id="gameTitleImage" type="file" name="gameTitle" />

            <label for="gameDate">Date</label>

            <input
              placeholder="aaaa-mm-jj"
              id="gameDate"
              type="text"
              v-model="gameDate"
            />

            <label for="gameBody">Description</label>

            <textarea
              id="gameBody"
              v-model="gameBody"
              cols="30"
              rows="10"
            ></textarea>

            <label for="image">Background Image</label>

            <input id="image" type="file" name="image" />
            <button type="submit">Envoyer</button>
          </form>
        </div>
        <div class="content content-2">
          <h2>Game métacritiques</h2>
          <div class="meta">
            <div class="metaheader">
              <h3>Metacritique</h3>

              <div id="new-task-form">
                <label for="new-author-input">Auteur</label>
                <input
                  type="text"
                  name="new-author-input"
                  id="new-author-input"
                  placeholder="Author?"
                />
                <label for="new-author-input">Description</label>
                <input
                  type="text"
                  name="new-task-input"
                  id="new-task-input"
                  placeholder="What do you have planned?"
                />
                <input type="submit" id="new-task-submit" value="Add task" />
              </div>
            </div>
            <div class="main">
              <section class="task-list">
                <h3>Liste Metacritiques</h3>

                <div id="tasks">
                  <!-- <div class="task">
					<div class="content">
						<input 
							type="text" 
							class="text" 
							value="A new task"
							readonly>
					</div>
					<div class="actions">
						<button class="edit">Edit</button>
						<button class="delete">Delete</button>
					</div>
				</div> -->
                </div>
                <button>Submit</button>
              </section>
            </div>
          </div>
        </div>
        <div class="content content-3">
          <h2>Press content</h2>
          <form @submit.prevent="postPress" enctype="multipart/form-data">
            <label for="pressTitle">PressTitle</label>
            <input placeholder="Titre" type="text" v-model="pressTitle" />
            <label for="pressExcerpt">PressExcerpt</label>
            <input placeholder="Extrait" type="text" v-model="pressExcerpt" />
            <label for="pressDate">PressDate</label>
            <input placeholder="aaaa-mm-jj" type="text" v-model="pressDate" />
            <label for="PressImage">PressImage</label>
            <input id="PressImage" type="file" name="pressImage" />
            <ckeditor
              :editor="editor"
              v-model="editorData"
              :config="editorConfig"
            ></ckeditor>
            <p><input id="postPress" type="submit" value="Submit" /></p>
          </form>
        </div>
      </section>
    </div>
  </section>
</template>
<style scoped>
.backoffice {
  padding: 20px;
  width: 100%;
}

@media screen and (max-width: 1000px) {
  .backoffice {
    padding: 0px;
  }
}

.backoffice_wrapper {
  max-width: 700px;
  margin: 0px auto;
  padding: 25px 30px 30px 30px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
}
.backoffice_wrapper .metaheader {
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 20px;
}
.backoffice_wrapper nav {
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  margin: auto;
}
.backoffice_wrapper nav label {
  display: block;
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  font-size: 17px;
  border-radius: 5px;
  margin: 0 5px;
  transition: all 0.3s ease;
}
.backoffice_wrapper nav label:hover {
  background: hsla(210, 29%, 24%, 0.3);
}
#home:checked ~ nav label.home,
#blog:checked ~ nav label.blog,
#code:checked ~ nav label.code {
  color: #fff;
  background: #2c3e50;
}

.backoffice_wrapper input[type="radio"] {
  display: none;
}

.backoffice_wrapper section .content {
  display: none;
  background: #fff;
}

#home:checked ~ .backoffice_section .content-1,
#blog:checked ~ .backoffice_section .content-2,
#code:checked ~ .backoffice_section .content-3 {
  display: block;
}
.backoffice_wrapper section .content h2 {
  margin: 30px 0 20px 0;
  text-align: center;
}
.backoffice_wrapper section .content p {
  text-align: justify;
}
.backoffice_wrapper section .content form input {
  width: 100%;
  flex: 1 1 0%;
  background-color: #cecece;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.25rem;
  margin: 10px 0 20px 0;
}

.backoffice_wrapper section .content form label {
  font-size: 1.25rem;
  font-weight: bold;
}

.backoffice_wrapper section .content form button {
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.25rem;
  cursor: pointer;
  background-color: #cecece;
  width: 100%;
}

.task-list button {
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.25rem;
  cursor: pointer;
  background-color: #cecece;
  width: 100%;
}

.backoffice_wrapper section .content form textarea {
  width: 100%;
  flex: 1 1 0%;
  background-color: #cecece;
  padding: 1rem;
  border-radius: 1rem;
  margin-right: 1rem;
  font-size: 1.25rem;
}

/* META */

#new-task-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

#new-task-input {
  flex: 1 1 0%;
  background-color: #cecece;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.25rem;
  margin: 10px 0;
}

#new-task-input::placeholder {
  color: #6b7280;
}

#new-author-input {
  flex: 1 1 0%;
  background-color: #cecece;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.25rem;
  margin: 10px 0;
}

#new-author-input::placeholder {
  color: #6b7280;
}

#new-task-submit {
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.25rem;
  cursor: pointer;
  background-color: #cecece;
  cursor: pointer;
  transition: 0.4s;
  margin: 10px 0;
}

#new-task-submit:hover {
  opacity: 0.8;
}

#new-task-submit:active {
  opacity: 0.6;
}

.main {
  flex: 1 1 0%;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

.task-list h3,
.metaheader h3 {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  text-align: center;
}

#tasks .task {
  display: flex;
  justify-content: space-between;
  background-color: #111827;
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
}

.task .content {
  flex: 1 1 0%;
}

.task .content .text:not(:read-only) {
  color: #ec4899;
}

.task .actions button {
  cursor: pointer;
  margin: 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.4s;
}

.task .actions button:hover {
  opacity: 0.8;
}

.task .actions button:active {
  opacity: 0.6;
}
</style>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue";
const axios = require("axios");
export default {
  name: "BackoffBody",
  data() {
    return {
      title: "",
      gameBody: "",
      gameDate: "",
      metacritique: "",
      pressTitle: "",
      pressExcerpt: "",
      pressDate: "",
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
  components: {
    ckeditor: CKEditor.component,
  },
  mounted() {
    axios
      .get("/api/game/")
      .then((response) => {
        console.log(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
    const form = document.querySelector("#new-task-submit");
    const input = document.querySelector("#new-task-input");
    const author = document.querySelector("#new-author-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener("click", (e) => {
      e.preventDefault();

      const task = input.value;
      const author_task = author.value;
      const task_el = document.createElement("div");
      task_el.classList.add("task");

      const task_content_el = document.createElement("div");
      task_content_el.classList.add("content");

      task_el.appendChild(task_content_el);

      const author_input_el = document.createElement("input");
      author_input_el.classList.add("text");
      author_input_el.classList.add("author");
      author_input_el.type = "text";
      author_input_el.value = author_task;
      author_input_el.setAttribute("readonly", "readonly");

      task_content_el.appendChild(author_input_el);
      const task_input_el = document.createElement("input");
      task_input_el.classList.add("text");
      task_input_el.classList.add("metacrit");
      task_input_el.type = "text";
      task_input_el.value = task;
      task_input_el.setAttribute("readonly", "readonly");

      task_content_el.appendChild(task_input_el);

      const task_actions_el = document.createElement("div");
      task_actions_el.classList.add("actions");

      const task_edit_el = document.createElement("button");
      task_edit_el.classList.add("edit");
      task_edit_el.innerText = "Edit";

      const task_delete_el = document.createElement("button");
      task_delete_el.classList.add("delete");
      task_delete_el.innerText = "Delete";

      task_actions_el.appendChild(task_edit_el);
      task_actions_el.appendChild(task_delete_el);

      task_el.appendChild(task_actions_el);

      list_el.appendChild(task_el);

      input.value = "";
      author.value = "";
      task_edit_el.addEventListener("click", (e) => {
        if (task_edit_el.innerText.toLowerCase() == "edit") {
          task_edit_el.innerText = "Save";
          task_input_el.removeAttribute("readonly");
          author_input_el.removeAttribute("readonly");
          author_input_el.focus();
        } else {
          task_edit_el.innerText = "Edit";
          author_input_el.setAttribute("readonly", "readonly");
          task_input_el.setAttribute("readonly", "readonly");
        }
      });

      task_delete_el.addEventListener("click", (e) => {
        list_el.removeChild(task_el);
      });
    });
  },
  methods: {
    postUser() {
      let formData = new FormData();
      let imagefile = document.querySelector("#image");
      formData.append("image", imagefile.files[0]);
      let gameTitle = document.querySelector("#gameTitle");
      formData.append("gameTitle", gameTitle.files[0]);
      formData.append("title", this.title);
      formData.append("gameBody", this.gameBody);
      formData.append("gameDate", this.gameDate);
      axios
        .post("/api/game", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          location.reload();
        });
    },
    postPress() {
      let formData = new FormData();
      let imagefile2 = document.querySelector("#PressImage").files[0];
      formData.append("image", imagefile2);
      formData.append("title", this.pressTitle);
      formData.append("pressBody", this.editorData);
      formData.append("pressExcerpt", this.pressExcerpt);
      formData.append("pressDate", this.pressDate);
      console.log(imagefile2);
      axios
        .post("/api/press", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          location.reload();
        });
    },
    postMeta() {
      axios
        .put("/api/game/{id}", {
          metacritique: this.metacritique,
        })
        .then((res) => {
          location.reload();
        });
    },
  },
};
</script>
