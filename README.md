🚀 Order ve Catalog Servisleri Projesi

Modern yazılım teknolojilerini kullanarak geliştirdiğimiz Order ve Catalog Servisleri Projesi, esnek ve ölçeklenebilir mikroservis mimarisine dayanmaktadır. Docker Compose ile yönetilen bu proje, iki ana servis içerir: Order Servisi ve Catalog Servisi. Ayrıca, yüksek performanslı veri akışı ve işlem süreçleri için Apache Kafka entegrasyonunu kullanmaktadır.

📦 Order Servisi
Order Servisi, sipariş işlemlerinin yönetimi için oluşturulmuştur. Sipariş oluşturma, güncelleme ve silme işlemlerini güvenilir ve hızlı bir şekilde gerçekleştirir. Bu servis, güvenlik, performans ve veri bütünlüğü sağlamak için @sinclair/typebox, ajv, axios, class-validator, cors, dotenv, drizzle-orm, express, express-rate-limiter, pg ve pino gibi güçlü bağımlılıklar kullanmaktadır. Geliştirme sürecinde ise jest, ts-jest, nodemon, ts-node ve typescript gibi araçlar ile kaliteli kod ve hızlı geliştirme sağlanmıştır.

📚 Catalog Servisi
Catalog Servisi, ürün kataloğu yönetimi için geliştirilmiştir. Ürün ekleme, güncelleme ve silme işlemlerini etkin ve verimli bir şekilde yönetir. Bu servisin bağımlılıkları arasında @prisma/client, @sinclair/typebox, ajv, axios, class-transformer, class-validator, express ve pino bulunmaktadır. Geliştirme sürecinde kullanılan @faker-js/faker, jest, nodemon, prisma ve supertest gibi araçlar, güçlü ve esnek bir geliştirme ortamı sunar.

⚡ Apache Kafka Entegrasyonu
Projenin önemli bir bileşeni olarak, Apache Kafka kullanılmaktadır. Kafka, veri akışı yönetimi ve gerçek zamanlı veri işlemleri için mükemmel bir çözüm sunar. Servisler arasındaki iletişimi ve veri akışını yönetmek için Kafka kullanılarak, yüksek performans ve güvenilirlik sağlanmaktadır.

🛠️ Docker Compose
Projenin her iki servisi de Docker Compose kullanılarak yönetilmektedir. Bu sayede, servislerin başlatılması, durdurulması ve yönetimi son derece kolaydır. Docker Compose, projeyi hem geliştirme hem de üretim ortamlarında tutarlı ve taşınabilir hale getirir.

Kullanılan Teknolojiler
1. Web Framework ve API Geliştirme
Express: RESTful API geliştirme için minimal ve esnek web framework.
cors: Cross-Origin Resource Sharing (CORS) yönetimi.
axios: HTTP istekleri ve API çağrıları için kütüphane.
express-rate-limiter: API isteklerini sınırlama.
2. Veritabanı ve ORM
pg: PostgreSQL istemcisi.
drizzle-orm: Order Servisi için kullanılan ORM (Object-Relational Mapping) çözümü.
@prisma/client: Catalog Servisi için kullanılan ORM.
prisma: Prisma ORM geliştirme araçları.
3. Veri Modelleme ve Doğrulama
@sinclair/typebox: JSON şemaları için kullanılan kütüphane.
ajv: JSON şema doğrulama motoru.
class-validator: TypeScript sınıflarının doğrulanması için kütüphane.
class-transformer: TypeScript sınıflarının dönüştürülmesi için kütüphane.
4. Logging ve İzleme
pino, pino-http, pino-pretty: Hızlı ve yapılandırılabilir logger.
5. Geliştirme Araçları
typescript: TypeScript desteği.
ts-node, tsx: TypeScript dosyalarını çalıştırmak için araçlar.
dotenv: Çevresel değişkenlerin yönetimi.
nodemon: Kod değişikliklerinde otomatik sunucu yeniden başlatma.
jest, ts-jest: Test frameworkleri.
@types/cors, @types/express, @types/jest, @types/node, @types/pg: TypeScript tipi tanımlamaları.
@faker-js/faker: Sahte veri oluşturma.
rosie: Nesne oluşturma aracı.
supertest: HTTP assertion library.
6. Mesajlaşma ve Veri Akışı
Apache Kafka: Yüksek performanslı veri akışı ve gerçek zamanlı veri işlemleri için mesajlaşma sistemi.
7. Container Yönetimi
Docker Compose: Servislerin başlatılması, durdurulması ve yönetimi.  
Sonuç  
Order ve Catalog Servisleri Projesi, modern yazılım geliştirme ilkelerini benimseyerek, sipariş ve ürün yönetimi için yenilikçi, ölçeklenebilir ve sürdürülebilir çözümler sunar.
Apache Kafka entegrasyonu sayesinde, yüksek performanslı veri akışı ve gerçek zamanlı işlem süreçleri sağlanmaktadır.
Kullanılan ileri teknoloji bağımlılıkları ve test araçları sayesinde yüksek kaliteli ve güvenilir bir yazılım geliştirme süreci sağlanmıştır.
Docker Compose ile yönetilen bu mikroservisler, dinamik iş ihtiyaçlarına en iyi şekilde cevap verir.
