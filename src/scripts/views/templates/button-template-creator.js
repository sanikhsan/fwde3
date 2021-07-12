const Button = (iconName, ariaLabel) => `
    <button aria-label="${ariaLabel}" id="likeButton">
        <i class="${iconName}" aria-hidden="true"></i>
    </button>
`;

export default Button;
