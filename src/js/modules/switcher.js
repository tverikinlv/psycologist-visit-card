function switcher(switcherDataName, descriptionDataName) {
    const swicthers = document.querySelectorAll(switcherDataName);
    const arr = switcherDataName.split('-');
    const switcherDataNameKey = arr[1] + arr[2].slice(0, 1).toUpperCase() + arr[2].slice(1, -1)

    swicthers.forEach((item) => item.addEventListener('click', () => {
            const switcherName = item.dataset[switcherDataNameKey];
            const descriptions = document.querySelectorAll(descriptionDataName);
            descriptions.forEach((item) => {
                if (item.classList.contains('active')) item.classList.remove('active')
            });
            const description = document.querySelector(`${descriptionDataName.slice(0, -1)}="${switcherName}"]`);
            description.classList.add('active');
    }));
}
export default switcher; 