문제 1:
1. crew_id와 nickname이 중복된다.
2. crew_id와 nickname을 포함한 crew 테이블을 만든다.
{
    crew_id,
    nickname
}
{
    id PK,
    crew_id FK,
    attendance_date,
    start_time, end_time
}
3. SELECT DISTINCT `nickname` from `attendance`;
4. CREATE TABLE `crew` (
   `crew_id` BIGINT PRIMARY KEY,
   `nickname` VARCHAR(50) NOT NULL
)
5. INSERT INTO `crew`
   (`crew_id`, `nickname`)
SELECT DISTINCT `crew_id`, `nickname` 
FROM `attendance`;

문제 2:
1. nickname 컬럼
2. ALTER TABLE `attendance` DROP COLUMN `nickname`;

문제 3:
ALTER TABLE `attendance` 
ADD FOREIGN KEY (`crew_id`) REFERENCES crew(`crew_id`);

문제 4:
ALTER TABLE `crew`
ADD CONSTRAINT uk_nickname UNIQUE (`nickname`);

문제 5:
SELECT `nickname` FROM `crew` WHERE `nickname` LIKE '디%'

문제 6:
SELECT * 
FROM `attendance` 
INNER JOIN `crew`
ON attendance.crew_id = crew.crew_id
WHERE `nickname` = '어셔' AND `attendance_date` = '2025-03-06'

문제 7:
INSERT INTO `attendance` (`crew_id`, `attendance_date`, `start_time`, `end_time`)
VALUES (
    (SELECT `crew_id` FROM `crew` WHERE `nickname` = '어셔'), 
    '2025-03-06', 
    '09:31',
    '18:01'
);

문제 8:
UPDATE `attendance`
SET `start_time`='10:00'
WHERE `crew_id` = (SELECT `crew_id` FROM `crew` WHERE `nickname` = '주니') 
AND `attendance_date` = '2025-03-12';

문제 9:
DELETE FROM `attendance`
WHERE `crew_id` = (SELECT `crew_id` FROM `crew` WHERE `nickname` = '아론')
AND `attendance_date` = '2025-03-12';

문제 10:
SELECT *
FROM `attendance` AS a INNER JOIN `crew` as c
ON a.crew_id = c.crew_id;

문제 11:
SELECT *
FROM `attendance`
WHERE `crew_id` = (
    SELECT `crew_id`
    FROM `crew`
    WHERE `nickname` = '검프'
);

문제 12:
SELECT c.nickname, a.end_time
FROM `attendance` AS a 
INNER JOIN `crew` AS c ON a.crew_id = c.crew_id
WHERE a.`attendance_date` = '2025-03-05'
ORDER BY a.`end_time` DESC
LIMIT 1;

문제 13:
SELECT c.nickname, COUNT(DISTINCT a.attendance_date)
FROM `attendance` AS a 
INNER JOIN `crew` AS c ON a.crew_id = c.crew_id
GROUP BY c.nickname;

문제 14:
SELECT c.nickname, COUNT(a.attendance_date)
FROM `attendance` AS a
INNER JOIN `crew` AS c ON a.crew_id = c.crew_id
WHERE `start_time` IS NOT NULL
GROUP BY c.nickname;

문제 15:
SELECT `attendance_date`, COUNT(DISTINCT `crew_id`)
FROM `attendance`
WHERE `start_time` IS NOT NULL
GROUP BY `attendance_date`;

문제 16:
SELECT `crew_id`, MIN(`start_time`), MAX(`start_time`)
FROM `attendance`
GROUP BY `crew_id`;
