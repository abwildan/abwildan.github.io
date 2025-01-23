<script>
    document.addEventListener("DOMContentLoaded", function() {
        const commentForm = document.getElementById("commentForm");
        const commentList = document.getElementById("commentList");

        // Fungsi untuk menampilkan komentar
        function displayComments() {
            const comments = JSON.parse(localStorage.getItem("comments")) || [];
            commentList.innerHTML = "";
            comments.forEach((comment) => {
                const div = document.createElement("div");
                div.classList.add("comment");
                div.innerHTML = `<strong>${comment.name}</strong><p>${comment.text}</p>`;
                commentList.appendChild(div);
            });
        }

        // Fungsi untuk menyimpan komentar
        commentForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const text = document.getElementById("comment").value;
            
            if (name && text) {
                const comments = JSON.parse(localStorage.getItem("comments")) || [];
                comments.push({ name, text });
                localStorage.setItem("comments", JSON.stringify(comments));
                displayComments();

                // Reset form after submission
                commentForm.reset();
            }
        });

        // Menampilkan komentar saat halaman dimuat
        displayComments();
    });
</script>
