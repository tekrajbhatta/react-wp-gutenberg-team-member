document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.wp-block-verdure-team-member');

    teamMembers.forEach((member) => {
        const teamMemberContent = member.querySelector('.team-member-content');
        const popup = member.querySelector('.team-member-popup');
        const closeButton = popup?.querySelector('.team-member-popup-close');

        if (teamMemberContent && popup && closeButton) {
            // Open popup
            teamMemberContent.addEventListener('click', () => {
                popup.classList.add('is-open');
            });

            // Close popup when clicking the close button
            closeButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent event from bubbling to parent
                popup.classList.remove('is-open');
            });

            // Close popup when clicking outside the popup content
            popup.addEventListener('click', (event) => {
                if (event.target === popup) {
                    popup.classList.remove('is-open');
                }
            });

            // Close the popup when clicking outside the popup content
            popup.addEventListener('click', (event) => {
                if (!popup.querySelector('.team-member-popup-content').contains(event.target)) {
                    closePopup();
                }
            });
        }
    });
});
