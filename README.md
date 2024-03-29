# Restaurant List v4.6 (我的餐廳清單，第四點六版)

### ALPHA Camp 學期三作業
(打造餐廳清單 => 建立餐廳清單的 CRUD => 重構餐廳清單 => 完成餐廳清單)
- 線上預覽：[https://restaurant-list-practice.herokuapp.com/users/login](https://restaurant-list-practice.herokuapp.com/users/login)

## 如何使用：
0. 至少先在電腦上裝好Node.js
1. 確定是否安裝mongoDB Community Edition[依作業系統版本對照說明操作](https://docs.mongodb.com/manual/administration/install-community/)
2. 從本專案頁面將檔案下載，或複製(clone)到要操作的電腦上
3. 使用終端機(terminal)，將目錄切換至專案資料夾：
```
cd restaurant_list
```
4. 使用npm安裝需要的套件：
```
npm i express express-handlebars mongoose method-override validator
npm i express-session passport bcryptjs dotenv connect-flash passport-local passport-facebook
```
5. 切換至"./models/seeds"，執行"node seeder.js"，建立資料庫與範例資料，
或使用以下指令：
```
npm run seeder
```
以下為測試用的「正確」使用者名稱與對應的帳密：

|(name) | email              | password | (登入後可見資料)     |
| ------| -------------------| ---------| --------------------|
| user1 | user1@example.com  | 12345678 | id #1, #2, #3 號餐廳 |
| user2 | user2@example.com  | 12345678 | id #4, #5, #6 號餐廳 |
6. 到[Facebook for Developers](https://developers.facebook.com/)建立應用程式，
在本專案根目錄依據".env.template"內容格式，新增".env"檔案，或使用指令：
```
cp .env.template .env
```
並填入Facebook應用程式編號、應用程式密鑰

7. 執行本專案：
```
npm run dev
```
8. 開啟預覽連結
- 若是在本機操作，於瀏覽器網址列輸入[http://localhost:3000](http://localhost:3000)；
- 若使用虛擬主機，則須配合主機服務設定另用網址

## 主要功能：
- 使用者需註冊帳號以管理個人清單(第四版起新增)
- 瀏覽現有資料中的餐廳清單(含名稱、類別、評分)
- 點擊個別餐廳列出詳細介紹(含地址、電話、簡介)
- 輸入餐廳關鍵字來搜尋(目前僅支援餐廳名稱片段)

### 版本更新：
#### 第二版
- 資料儲存方式由json改為mongoDB，支援完整的CRUD操作，可新增、顯示、更新、刪除餐廳資料
- 刪除資料前會出現提示，避免誤刪
- 微調UI(使用者介面)
#### 第三版
- 增加依名稱遞增/減、類別、位置排序的選單功能
- 路由依RESTful設計與功能分類，重構動作指令與檔案獨立，便於未來維護
#### 第三點五版
- 選單功能路徑改用Query String判斷，可依名稱、類別、位置遞增/減，共6種排序組合
#### 第四版
- 以使用者認證系統(註冊、登入、登出功能與身分驗證)，個別化使用者資料管理
- 對認證系統的錯誤與重要操作(如：漏填、填錯；已註冊、登出)會出現提示訊息
- 支援透過Facebook(臉書)直接登入建立帳號(僅限於本機操作，不支援虛擬機器http預覽網址！)
- 以不直接儲存密碼的雜湊(hash)機制減免個資洩露風險
#### 第四點五版
- 補強前後端註冊帳戶與新增餐廳時的資料驗證與提示，避免不合規定的資料寫入與資安問題
- 修復搜尋與排序功能，以免出現連帶顯示其他帳戶餐廳的錯誤，並調整按鈕說明
#### 第四點六版
- 更改排序功能與路由，整合進首頁顯示，且選項改為依名稱遞增/減、類別遞增、評分遞減 
