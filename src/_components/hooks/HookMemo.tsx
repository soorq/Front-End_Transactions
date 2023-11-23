const HookMemo: React.FC = () => {
    return (
        <div className="col-span-3 col-start-5 row-start-2">
            <div className="w-full h-full bg-emerald-200 rounded-xl"></div>
        </div>
    );
};

export default HookMemo;

// useMemo - это хук, для мемоизацию, то есть кэширование каких-то статических данных, пока не поменяются по зависимости
// Его задача, кэшировать те данные, которые статичные, в случае если каждый раз итерация с одними и те же данными, то легче через мемо ждать, чтоб их не выполнять, просто получить готовый результат
