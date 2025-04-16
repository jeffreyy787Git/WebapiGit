import articles from './data/articles.json';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Card } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
const DetailArticle = (props : any) => {
 const { aid } = useParams();
 const navigate = useNavigate();
 for(const article of articles) {
 if(article.id as any==aid) {
 return(
 <>
 <Card title={article.title}>
 <p>{article.fullText}</p>
 <Button type="primary" icon={<RollbackOutlined />} onClick={()=>navigate(-1)} />
 </Card>
 </>
 );
 }
 }
}
export default DetailArticle;