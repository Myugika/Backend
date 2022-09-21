module.exports = {
    HOME_CONTENTS:
        `웹 개발 어쩌구저쩌구`,
    listGen:    function(files) {
        let list = '';
        for (let file of files) {
            const title = file.substring(0, file.length-4);     // .txt를 제외한 나머지
            list += `<li><h3><a href="/?id=${title}">${title}</a></h3></li>`;
        }
        return list;
    },
    buttonGen:  function(title) {
        if (title === undefined) {      // 홈 화면, 생성만 가능
            return `
                <button onclick="location.href='/create'">생성</button>
                <button disabled="disabled">수정</button>
                <button disabled="disabled">삭제</button>
            `;
        } else {                        // 조회 화면, 생성/수정/삭제 가능
            return `
                <button onclick="location.href='/create'">생성</button>
                <button onclick="location.href='/update?id=${title}'">수정</button>
                <button onclick="location.href='/delete?id=${title}'">삭제</button>
            `;
        }
    },
    createForm: function() {
        return `
            <form action="/create" method="post">
                <table>
                    <tr>
                        <td>제목</td>
                        <td><input type="text" name="title"></td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td><textarea name="content" cols="60" rows="5"></textarea></td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align: center;"><input type="submit" value="생성"></td>
                    </tr>
                </table>
            </form>        
        `;
    },
    updateForm: function(title, content) {
        return `
            <form action="/update" method="post">
                <input type="hidden" name="original" value="${title}">
                <table>
                    <tr>
                        <td>제목</td>
                        <td><input type="text" name="title" value="${title}"></td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td><textarea name="content" cols="60" rows="5">${content}</textarea></td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align: center;"><input type="submit" value="수정"></td>
                    </tr>
                </table>
            </form>        
        `;
    },
    deleteForm: function(title) {
        return `
            ${title} 글을 삭제하시겠습니까?<br><br>
            <button onclick="location.href='/deleteConfirm?id=${title}'">삭제</button>
            <button onclick="location.href='/?id=${title}'">취소</button>
        `;
    }
}