package elasticsearch.backend.dto;

import org.springframework.web.multipart.MultipartFile;

public class UploadModel {

    private String name;
    private String surname;
    private String email;
    private String address;
    private int degreeOfEducation;
    private MultipartFile file;

    public UploadModel() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getDegreeOfEducation() {
        return degreeOfEducation;
    }

    public void setDegreeOfEducation(int degreeOfEducation) {
        this.degreeOfEducation = degreeOfEducation;
    }

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }
}
