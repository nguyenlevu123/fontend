function createContactManager() {
    let contacts = [];
    let nextId = 1;

    function addContact(name, email, phone) {
        const contact = { id: nextId++, name, email, phone };
        contacts.push(contact);
        alert(" Đã thêm liên hệ thành công!");
    }

    function displayContacts() {
        if (contacts.length === 0) {
            alert(" Danh bạ trống!");
        } else {
            let result = " Danh sách liên hệ:\n";
            contacts.forEach(contact => {
                result += ` ID: ${contact.id}, Tên: ${contact.name}, Email: ${contact.email}, SĐT: ${contact.phone}\n`;
            });
            alert(result);
        }
    }

    function searchByPhone(phone) {
        const found = contacts.find(contact => contact.phone === phone);
        if (found) {
            alert(` Tìm thấy liên hệ: \n ID: ${found.id}, Tên: ${found.name}, Email: ${found.email}, SĐT: ${found.phone}`);
        } else {
            alert(" Không tìm thấy liên hệ với số điện thoại này.");
        }
    }

    function updateContact(id, name, email, phone) {
        const contact = contacts.find(contact => contact.id === id);
        if (contact) {
            contact.name = name || contact.name;
            contact.email = email || contact.email;
            contact.phone = phone || contact.phone;
            alert(" Cập nhật liên hệ thành công!");
        } else {
            alert(" Không tìm thấy liên hệ để cập nhật.");
        }
    }

    function deleteContact(id) {
        const index = contacts.findIndex(contact => contact.id === id);
        if (index !== -1) {
            contacts.splice(index, 1);
            alert(" Xóa liên hệ thành công!");
        } else {
            alert(" Không tìm thấy liên hệ để xóa.");
        }
    }

    return { addContact, displayContacts, searchByPhone, updateContact, deleteContact };
}


const manager = createContactManager();

function main() {
    let choice;
    do {
        choice = prompt(
            " Quản lý danh bạ\n" +
            "1Thêm liên hệ\n" +
            "2 Hiển thị danh bạ\n" +
            "3 Tìm kiếm theo SĐT\n" +
            "4 Cập nhật liên hệ\n" +
            "5 Xóa liên hệ\n" +
            "6 Thoát\n" +
            " Nhập lựa chọn của bạn:"
        );

        switch (choice) {
            case "1":
                let name = prompt("Nhập tên:");
                let email = prompt("Nhập email:");
                let phone = prompt("Nhập số điện thoại:");
                manager.addContact(name, email, phone);
                break;
            case "2":
                manager.displayContacts();
                break;
            case "3":
                let searchPhone = prompt("Nhập số điện thoại cần tìm:");
                manager.searchByPhone(searchPhone);
                break;
            case "4":
                let updateId = parseInt(prompt("Nhập ID liên hệ cần cập nhật:"));
                let newName = prompt("Nhập tên mới (bỏ trống nếu không thay đổi):");
                let newEmail = prompt("Nhập email mới (bỏ trống nếu không thay đổi):");
                let newPhone = prompt("Nhập số điện thoại mới (bỏ trống nếu không thay đổi):");
                manager.updateContact(updateId, newName, newEmail, newPhone);
                break;
            case "5":
                let deleteId = parseInt(prompt("Nhập ID liên hệ cần xóa:"));
                manager.deleteContact(deleteId);
                break;
            case "6":
                alert(" Tạm biệt! Hẹn gặp lại.");
                break;
            default:
                alert(" Lựa chọn không hợp lệ, vui lòng nhập lại!");
        }
    } while (choice !== "6");
}

main();




