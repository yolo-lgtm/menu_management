'use strict';

{
    // 各曜日の朝昼夜ボタンを取得
    const morning_btn = document.getElementById('morning_btn');
    const noon_btn = document.getElementById('noon_btn');
    const night_btn = document.getElementById('night_btn');

    // 各曜日の朝・昼・夜のリストを取得
    const morning_mon = document.getElementById('morning_mon');
    const noon_mon = document.getElementById('noon_mon');
    const night_mon = document.getElementById('night_mon');
    
    // インプットタグの値を取得
    const add = document.getElementById('add').value;

    // 削除ボタンを取得
    const delete_btn = document.getElementById('delete');

    // 各曜日の朝昼夜の情報を取得
    const mon_morning = () => {
        const add = document.getElementById('add').value;
        morning_mon.innerHTML = '朝：' + add;
    }
    const mon_noon = () => {
        const add = document.getElementById('add').value;
        noon_mon.innerHTML = '昼：' + add;
    }
    const mon_night = () => {
        const add = document.getElementById('add').value;
        night_mon.innerHTML = '夜：' + add;
    }
    
    // メニューを追加するイベント
    morning_btn.addEventListener('click', () => {
        mon_morning();
    });
    noon_btn.addEventListener('click', () => {
        mon_noon();
    });
    night_btn.addEventListener('click', () => {
        mon_night();
    });

    // メニュー追加覧の削除
    delete_btn.addEventListener('click', () => {
        const add = document.getElementById('add');
        add.value = '';
    }) ;
}