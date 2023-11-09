const tg = window.Telegram.WebApp;

function useTelegram() {
    const onClose = () => {
        tg.close();
    }
    return {
        tg,
        onClose,
        user: tg.initDataUnsafe?.user
    };
}

export default useTelegram;