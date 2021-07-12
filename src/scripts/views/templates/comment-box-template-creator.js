const Comment = () => `<div class="user__wrapper">
        <div class="user__rounded"><i class="fas fa-user"></i></div>
        <div style="display: flex;justify-content: center;align-content: center;flex-direction: column;margin-left: 10px;">
            <form id="addReview">
                <input type="text" id="name" name="name" placeholder="Your Name" style="min-width: 44px; min-height: 44px;" required>
                <textarea id="description" name="description" placeholder="Description" style="min-width: 44px; min-height: 44px;" required></textarea>
                <input style="min-width: 44px; min-height: 44px;" type="submit" value="Submit">
            </form>
        </div>
    </div>`;

export default Comment;
