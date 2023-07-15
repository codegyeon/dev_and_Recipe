import React from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const CategoryBox = ({method1,method2,method3,method4}) => {
    return (
        <>
            <Form.Group as={Col} controlId="formGridState" className="text-start ">
                <Form.Label>종류</Form.Label>
                <Form.Select defaultValue="레시피 종류" style={{width: "160px"}}  onChange={method1}>
                    <option>메인반찬</option>
                    <option>국/탕</option>
                    <option>찌개</option>
                    <option>디저트</option>
                    <option>면/만두</option>
                    <option>밥/죽/떡</option>
                    <option>퓨전</option>
                    <option>김치/젓갈/장류</option>
                    <option>양념/소스/잼</option>
                    <option>양식</option>
                    <option>샐러드</option>
                    <option>스프</option>
                    <option>빵</option>
                    <option>과자</option>
                    <option>차/음료/술</option>
                    <option>기타</option>
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState" className="text-start">
                <Form.Label>상황</Form.Label>
                <Form.Select defaultValue="다양한 상황" style={{width: "160px"}} onChange={method2}>
                    <option>일상</option>
                    <option>초스피드</option>
                    <option>손님접대</option>
                    <option>술안주</option>
                    <option>다이어트</option>
                    <option>도시락</option>
                    <option>영양식</option>
                    <option>간식</option>
                    <option>야식</option>
                    <option>푸드스타일링</option>
                    <option>해장</option>
                    <option>명절</option>
                    <option>이유식</option>
                    <option>기타</option>
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState" className="text-start">
                <Form.Label>방법</Form.Label>
                <Form.Select defaultValue="방법별" style={{width: "160px"}} onChange={method3}>
                    <option>볶음</option>
                    <option>끓이기</option>
                    <option>부침</option>
                    <option>조림</option>
                    <option>무침</option>
                    <option>비빔</option>
                    <option>찜</option>
                    <option>절임</option>
                    <option>튀김</option>
                    <option>삶기</option>
                    <option>굽기</option>
                    <option>데치기</option>
                    <option>회</option>
                    <option>기타</option>
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState" className="text-start">
                <Form.Label>재료</Form.Label>
                <Form.Select defaultValue="재료별" style={{width: "160px"}} onChange={method4}>
                    <option>소고기</option>
                    <option>돼지고기</option>
                    <option>닭고기</option>
                    <option>육류</option>
                    <option>채소류</option>
                    <option>해물류</option>
                    <option>달걀/유제품</option>
                    <option>가공식품류</option>
                    <option>쌀</option>
                    <option>밀가루</option>
                    <option>건어물류</option>
                    <option>버섯류</option>
                    <option>과일류</option>
                    <option>콩/견과류</option>
                    <option>곡류</option>
                    <option>기타</option>
                </Form.Select>
            </Form.Group>
        </>
    );
};

export default CategoryBox;
